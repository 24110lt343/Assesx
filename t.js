const response = await fetch("https://onecompiler.com/api/console/run", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "text/event-stream",
    },
    body: JSON.stringify({
        language: "java",
        files: [{
            name: "Main.java",
            content: `import java.util.*;

public class Main {
    public static void main(String[] args) {    
            Scanner sc = new Scanner(System.in);
            String name = sc.nextLine();
            System.out.println(name);
    }
}`
        }]
    })
});

console.log("Status:", response.status);

const reader = response.body.getReader();
const decoder = new TextDecoder();

let buffer = "";

console.log("Connected\n");

while (true) {
    
    const { done, value } = await reader.read();


    if (done) {
        console.log("STREAM CLOSED");
        break;
    }

    const chunk = decoder.decode(value, { stream: true });
    console.log(chunk);
    buffer += chunk;
    while (true) {
        const idx = buffer.indexOf("\n\n");
        if (idx === -1) break;

        const event = buffer.slice(0, idx);
        buffer = buffer.slice(idx + 2);

        console.log(event);

        const obj = {};

        for (const line of event.split("\n")) {
            if (!line.trim()) continue;

            const colon = line.indexOf(":");
            if (colon === -1) continue;

            const key = line.slice(0, colon).trim();
            const val = line.slice(colon + 1).trim();

            obj[key] = val;
        }

        console.log("PARSED:");
        console.dir(obj, { depth: null });

        if (obj.data) {
            try {
                console.log("JSON DATA:");
                console.dir(JSON.parse(obj.data), { depth: null });
            } catch {
                console.log("DATA (not JSON):");
                console.log(obj.data);
            }
        }

        console.log("--------------------------------");
    }
}


function normalizeOutput(output) {
  return output
    .replace(/\u0000/g, " ")
    .replace(/\r\n/g, "\n")
    .trim();
}

console.log(normalizeOutput("AKASH\u0000MISHRA\n"));

// https://onecompiler.com/api/console/stdin
// Method : post
// Payload : "workerId":"wi-40ae57f3-5fd6-429b-a587-4401b45164e0","jobId":"44x23wmyu_44x2fevua","data":"1000\n"}