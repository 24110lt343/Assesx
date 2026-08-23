"use client";

import React from "react";
import { Receipt, Download, ArrowUpRight } from "lucide-react";

const invoices = [
  { id: "INV-2024-092", date: "Aug 15, 2024", amount: "$299.00", status: "Paid", plan: "Pro Monthly" },
  { id: "INV-2024-091", date: "Jul 15, 2024", amount: "$299.00", status: "Paid", plan: "Pro Monthly" },
  { id: "INV-2024-090", date: "Jun 15, 2024", amount: "$299.00", status: "Paid", plan: "Pro Monthly" },
  { id: "INV-2024-089", date: "May 15, 2024", amount: "$299.00", status: "Paid", plan: "Pro Monthly" },
  { id: "INV-2024-088", date: "Apr 15, 2024", amount: "$299.00", status: "Paid", plan: "Pro Monthly" },
  { id: "INV-2024-087", date: "Mar 15, 2024", amount: "$299.00", status: "Paid", plan: "Pro Monthly" },
];

export default function BillingHistory() {
  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#004ae0]" />
          <span className="text-[11px] font-medium tracking-wider text-gray-400 uppercase">BILLING</span>
        </div>
        <h2 className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight text-[#1e1f24]">Billing History</h2>
        <p className="mt-2 text-[13px] sm:text-sm text-[#67676f] leading-relaxed max-w-2xl">
          View and download your past invoices.
        </p>

        <div className="mt-6 bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-12 gap-4 px-5 py-3 border-b border-gray-100 text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400">
            <div className="col-span-4 sm:col-span-3">Invoice</div>
            <div className="col-span-3 sm:col-span-3">Date</div>
            <div className="col-span-3 sm:col-span-2">Amount</div>
            <div className="hidden sm:block sm:col-span-2">Status</div>
            <div className="col-span-2 sm:col-span-2 text-right">Action</div>
          </div>
          {invoices.map(inv => (
            <div key={inv.id} className="grid grid-cols-12 gap-4 px-5 py-4 border-b border-gray-50 hover:bg-gray-50 transition-colors items-center">
              <div className="col-span-4 sm:col-span-3 flex items-center gap-2">
                <Receipt size={14} className="text-[#67676f] flex-shrink-0" />
                <span className="text-[12px] font-medium text-[#1e1f24]">{inv.id}</span>
              </div>
              <div className="col-span-3 sm:col-span-3 text-[12px] text-[#67676f]">{inv.date}</div>
              <div className="col-span-3 sm:col-span-2 text-[12px] font-semibold text-[#1e1f24]">{inv.amount}</div>
              <div className="hidden sm:block sm:col-span-2">
                <span className="px-2 py-0.5 rounded-full bg-[#004ae0]/10 text-[#004ae0] text-[10px] font-semibold">{inv.status}</span>
              </div>
              <div className="col-span-2 sm:col-span-2 flex justify-end">
                <button className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"><Download size={13} className="text-gray-400" /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}