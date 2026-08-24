"use client";

import React, { useState, useEffect } from "react";
import {
  Receipt,
  Download,
  ArrowUpRight,
  Calendar,
  CreditCard,
  CheckCircle2,
  Clock,
  ChevronDown,
  FileText,
  TrendingUp,
  Wallet,
  Filter,
  ArrowRight,
} from "lucide-react";

const allInvoices = [
  { id: "INV-2024-092", date: "Aug 15, 2024", amount: 299.00, status: "Paid", plan: "Pro Monthly", method: "Visa •••• 4242", items: [{ name: "Pro Plan - Monthly", qty: 1, price: 249.00 }, { name: "Add-on: API Access", qty: 1, price: 50.00 }] },
  { id: "INV-2024-091", date: "Jul 15, 2024", amount: 299.00, status: "Paid", plan: "Pro Monthly", method: "Visa •••• 4242", items: [{ name: "Pro Plan - Monthly", qty: 1, price: 249.00 }, { name: "Add-on: API Access", qty: 1, price: 50.00 }] },
  { id: "INV-2024-090", date: "Jun 15, 2024", amount: 299.00, status: "Paid", plan: "Pro Monthly", method: "Visa •••• 4242", items: [{ name: "Pro Plan - Monthly", qty: 1, price: 249.00 }, { name: "Add-on: API Access", qty: 1, price: 50.00 }] },
  { id: "INV-2024-089", date: "May 15, 2024", amount: 299.00, status: "Paid", plan: "Pro Monthly", method: "Mastercard •••• 8899", items: [{ name: "Pro Plan - Monthly", qty: 1, price: 249.00 }, { name: "Add-on: API Access", qty: 1, price: 50.00 }] },
  { id: "INV-2024-088", date: "Apr 15, 2024", amount: 249.00, status: "Paid", plan: "Pro Monthly", method: "Mastercard •••• 8899", items: [{ name: "Pro Plan - Monthly", qty: 1, price: 249.00 }] },
  { id: "INV-2024-087", date: "Mar 15, 2024", amount: 249.00, status: "Paid", plan: "Pro Monthly", method: "Mastercard •••• 8899", items: [{ name: "Pro Plan - Monthly", qty: 1, price: 249.00 }] },
  { id: "INV-2024-086", date: "Feb 15, 2024", amount: 249.00, status: "Paid", plan: "Pro Monthly", method: "Visa •••• 4242", items: [{ name: "Pro Plan - Monthly", qty: 1, price: 249.00 }] },
  { id: "INV-2024-085", date: "Jan 15, 2024", amount: 249.00, status: "Paid", plan: "Pro Monthly", method: "Visa •••• 4242", items: [{ name: "Pro Plan - Monthly", qty: 1, price: 249.00 }] },
];

const years = ["All", "2024", "2023"];

export default function BillingHistory() {
  const [mounted, setMounted] = useState(false);
  const [activeYear, setActiveYear] = useState("All");
  const [expandedId, setExpandedId] = useState(null);
  const [downloadingId, setDownloadingId] = useState(null);

  useEffect(() => {
    setTimeout(() => setMounted(true), 60);
  }, []);

  const filtered = activeYear === "All"
    ? allInvoices
    : allInvoices.filter((inv) => inv.date.includes(activeYear));

  const totalSpent = filtered.reduce((a, b) => a + b.amount, 0);
  const avgBill = filtered.length ? totalSpent / filtered.length : 0;
  const maxAmount = Math.max(...allInvoices.map((i) => i.amount));

  const handleDownload = (id) => {
    setDownloadingId(id);
    setTimeout(() => setDownloadingId(null), 2000);
  };

  return (
    <div className="w-full h-full overflow-y-auto bg-[#f8f9fb]">
      <div className="max-w-full my-3 mx-5">
        {/* Header */}
        <div
          className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#004ae0]" />
              <span className="text-[11px] font-medium tracking-wider text-gray-400 uppercase">
                BILLING
              </span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#1e1f24]">
              Billing History
            </h2>
            <p className="mt-2 text-[13px] text-[#67676f] leading-relaxed max-w-lg">
              Track every charge, download receipts, and review your payment history across all billing cycles.
            </p>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1e1f24] text-white text-[13px] font-medium hover:bg-[#004ae0] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 self-start sm:self-auto">
            <Download size={15} strokeWidth={2.5} />
            Export All
          </button>
        </div>

        {/* Summary Cards */}
        <div
          className={`mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-[#004ae0]/10 flex items-center justify-center">
                <Wallet size={16} className="text-[#004ae0]" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400">Total Spent</span>
            </div>
            <p className="mt-2 text-2xl font-bold text-[#1e1f24]">
              ${totalSpent.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </p>
            <p className="mt-0.5 text-[11px] text-gray-400">{filtered.length} invoices</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-[#1e1f24]/10 flex items-center justify-center">
                <Receipt size={16} className="text-[#1e1f24]" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400">Avg. Bill</span>
            </div>
            <p className="mt-2 text-2xl font-bold text-[#1e1f24]">
              ${avgBill.toFixed(2)}
            </p>
            <p className="mt-0.5 text-[11px] text-gray-400">Per invoice</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gray-100 flex items-center justify-center">
                <CreditCard size={16} className="text-[#67676f]" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400">Method</span>
            </div>
            <p className="mt-2 text-lg font-bold text-[#1e1f24]">Visa •••• 4242</p>
            <p className="mt-0.5 text-[11px] text-gray-400">Primary</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-[#004ae0]/10 flex items-center justify-center">
                <Calendar size={16} className="text-[#004ae0]" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400">Next Bill</span>
            </div>
            <p className="mt-2 text-lg font-bold text-[#1e1f24]">Sep 15, 2024</p>
            <p className="mt-0.5 text-[11px] text-gray-400">$299.00 due</p>
          </div>
        </div>

        {/* Year Filter */}
        <div
          className={`mt-8 flex items-center gap-2 transition-all duration-700 delay-150 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Filter size={14} className="text-gray-400" />
          {years.map((y) => (
            <button
              key={y}
              onClick={() => setActiveYear(y)}
              className={`px-4 py-1.5 rounded-full text-[12px] font-medium transition-all duration-200 ${
                activeYear === y
                  ? "bg-[#1e1f24] text-white"
                  : "bg-white text-[#67676f] border border-gray-200 hover:border-gray-300"
              }`}
            >
              {y}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-8 relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-4 bottom-4 w-px bg-gray-200 hidden sm:block" />

          <div className="space-y-4">
            {filtered.map((inv, i) => {
              const isExpanded = expandedId === inv.id;
              const percent = (inv.amount / maxAmount) * 100;

              return (
                <div
                  key={inv.id}
                  className={`relative transition-all duration-500 ${
                    mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${200 + i * 70}ms` }}
                >
                  <div
                    className={`group bg-white rounded-2xl border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-gray-300 ${
                      isExpanded ? "shadow-lg border-gray-300" : ""
                    }`}
                  >
                    {/* Main Row */}
                    <div
                      onClick={() => setExpandedId(isExpanded ? null : inv.id)}
                      className="w-full flex items-center gap-4 p-4 sm:p-5 text-left cursor-pointer"
                    >
                      {/* Timeline dot */}
                      <div className="hidden sm:flex flex-col items-center flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-[#004ae0]/10 flex items-center justify-center border-4 border-[#f8f9fb]">
                          <Receipt size={16} className="text-[#004ae0]" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-[14px] font-semibold text-[#1e1f24]">{inv.id}</p>
                          <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#004ae0]/10 text-[#004ae0] text-[10px] font-semibold">
                            <CheckCircle2 size={9} /> Paid
                          </span>
                        </div>
                        <div className="mt-1 flex items-center gap-3 text-[11px] text-[#67676f]">
                          <span className="flex items-center gap-1">
                            <Calendar size={10} /> {inv.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <CreditCard size={10} /> {inv.method}
                          </span>
                          <span>{inv.plan}</span>
                        </div>
                      </div>

                      {/* Amount + Bar */}
                      <div className="hidden sm:block w-32 flex-shrink-0">
                        <div className="flex items-center justify-between text-[11px] mb-1">
                          <span className="font-semibold text-[#1e1f24]">${inv.amount.toFixed(2)}</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-[#004ae0] transition-all duration-1000 ease-out"
                            style={{
                              width: mounted ? `${percent}%` : "0%",
                              transitionDelay: `${400 + i * 70}ms`,
                            }}
                          />
                        </div>
                      </div>

                      {/* Mobile amount */}
                      <div className="sm:hidden flex-shrink-0 text-right">
                        <p className="text-[14px] font-bold text-[#1e1f24]">${inv.amount.toFixed(2)}</p>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDownload(inv.id);
                          }}
                          className={`p-2 rounded-xl transition-all duration-300 ${
                            downloadingId === inv.id
                              ? "bg-[#004ae0] text-white"
                              : "bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-[#1e1f24]"
                          }`}
                        >
                          {downloadingId === inv.id ? (
                            <CheckCircle2 size={15} />
                          ) : (
                            <Download size={15} />
                          )}
                        </button>
                        <ChevronDown
                          size={16}
                          className={`text-gray-300 transition-transform duration-300 ml-1 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </div>

                    {/* Expanded Details */}
                    {isExpanded && (
                      <div className="px-4 sm:px-5 pb-5 pt-0 border-t border-gray-100">
                        <div className="sm:pl-14 pt-4">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">
                            Invoice Breakdown
                          </p>
                          <div className="space-y-2">
                            {inv.items.map((item, idx) => (
                              <div
                                key={idx}
                                className="flex items-center justify-between py-2 px-3 rounded-lg bg-gray-50"
                              >
                                <div className="flex items-center gap-2">
                                  <FileText size={12} className="text-gray-400" />
                                  <span className="text-[12px] text-[#1e1f24]">{item.name}</span>
                                  <span className="text-[10px] text-gray-400">×{item.qty}</span>
                                </div>
                                <span className="text-[12px] font-semibold text-[#1e1f24]">
                                  ${item.price.toFixed(2)}
                                </span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-3 pt-3 border-t border-gray-200 flex items-center justify-between">
                            <span className="text-[12px] font-semibold text-[#1e1f24]">Total</span>
                            <span className="text-[14px] font-bold text-[#1e1f24]">
                              ${inv.amount.toFixed(2)}
                            </span>
                          </div>
                          <div className="mt-4 flex items-center gap-2">
                            <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1e1f24] text-white text-[12px] font-medium hover:bg-[#004ae0] transition-colors">
                              <Download size={13} /> Download PDF
                            </button>
                            <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-gray-200 text-[12px] font-medium text-[#67676f] hover:bg-gray-50 transition-colors">
                              <ArrowUpRight size={13} /> View Receipt
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Empty */}
        {filtered.length === 0 && (
          <div className="mt-12 text-center py-16">
            <div className="h-14 w-14 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto">
              <Receipt size={24} className="text-gray-300" />
            </div>
            <p className="mt-4 text-[14px] font-medium text-[#1e1f24]">No invoices found</p>
            <p className="mt-1 text-[12px] text-gray-400">Try a different year filter</p>
          </div>
        )}
      </div>
    </div>
  );
}