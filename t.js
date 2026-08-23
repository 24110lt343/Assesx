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


// https://onecompiler.com/api/console/stdin
// Method : post
// Payload : "workerId":"wi-40ae57f3-5fd6-429b-a587-4401b45164e0","jobId":"44x23wmyu_44x2fevua","data":"1000\n"}



// Java/C++/Python/Javascript : https://onecompiler.com/api/console/run ::POST
// Payload : {
//             name: "Main.java",
//             content: `import java.util.*;

// public class Main {
//     public static void main(String[] args) {    
//             Scanner sc = new Scanner(System.in);
//             String name = sc.nextLine();
//             System.out.println(name);
//     }
// }`
//         }]
//     }


// Go :
// Payload : {"language":"go","files":[{"name":"main.go","content":"package main\nimport \"fmt\"\n\nfunc main() {\n\tfmt.Printf(\"Hello, World!\")\n}"}],"stdin":""}



// File Names
//python : main.py
// java :Main.java
// cpp : Main.cpp
// javascript : index.js

// Time matrix
// Java --------> 2s Approx
// C++ ---------> 1.5s Approx
// Python ------> 1s  Approx
// Javascript --> 0.8s Approx
// GoLang ------> 1.5s Approx