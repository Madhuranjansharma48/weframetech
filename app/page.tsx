import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronRight, CheckCircle2, Circle, Search, Filter, LogOut, Settings, Menu } from "lucide-react";

// NOTE: This is a single-file preview component. In your Next.js app, place this in app/(dashboard)/page.tsx
// and move the Sidebar + Topbar into separate components. All data here is mocked.

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top strip */}
      <div className="h-1 w-full bg-emerald-400" />

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:flex w-64 shrink-0 flex-col gap-2 bg-gradient-to-b from-slate-900 to-slate-800 text-white px-4 py-6">
          <div className="flex items-center gap-2 px-2">
            <div className="h-8 w-8 rounded-lg bg-white/10 grid place-items-center font-bold">wf</div>
            <div className="font-semibold">weframetech</div>
          </div>
          <nav className="mt-6 space-y-1 text-sm">
            {[
              "Home",
              "Stages & Checklist",
              "Upload Docs",
              "Preferred Vendors",
              "Tech Stack",
              "Targets",
              "Zee Sales Targets",
              "MAI Settings",
              "Pending Questions",
            ].map((item, idx) => (
              <button
                key={item}
                className={`w-full text-left rounded-xl px-3 py-2 hover:bg-white/10 transition ${
                  idx === 0 ? "bg-white/10" : ""
                }`}
              >
                <span className="mr-2 align-middle">{idx === 0 ? "•" : ""}</span>
                {item}
              </button>
            ))}
          </nav>
          <div className="mt-auto">
            <button className="flex w-full items-center justify-between rounded-xl px-3 py-2 hover:bg-white/10">
              <span className="flex items-center gap-2"><Settings className="h-4 w-4"/> Settings</span>
              <ChevronRight className="h-4 w-4"/>
            </button>
            <button className="mt-1 flex w-full items-center justify-between rounded-xl px-3 py-2 hover:bg-white/10">
              <span className="flex items-center gap-2"><LogOut className="h-4 w-4"/> Logout</span>
              <ChevronRight className="h-4 w-4"/>
            </button>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 p-4 lg:p-6">
          {/* Topbar */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2 lg:hidden">
              <Button variant="ghost" size="icon"><Menu className="h-5 w-5"/></Button>
              <div className="font-semibold">Dashboard</div>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <Button variant="outline" size="icon"><Settings className="h-5 w-5"/></Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://i.pravatar.cc/100" alt="user" />
                <AvatarFallback>MR</AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {/* Column 1 */}
            <div className="space-y-4">
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>Account Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl border p-4">
                      <div className="text-sm text-slate-500">Overall</div>
                      <div className="mt-2 text-3xl font-semibold">85%</div>
                      <Progress value={85} className="mt-3" />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-medium">Steps Completed</div>
                        <ul className="mt-2 space-y-2 text-sm">
                          {[
                            "Profile Setup",
                            "Initial Training",
                            "Legal Documents",
                          ].map((s) => (
                            <li key={s} className="flex items-center justify-between rounded-lg border p-2">
                              <span>{s}</span>
                              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Steps Remaining</div>
                        <ul className="mt-2 space-y-2 text-sm">
                          {[
                            "Financial Integration",
                            "Final Review",
                          ].map((s, i) => (
                            <li key={s} className="flex items-center justify-between rounded-lg border p-2 opacity-70">
                              <span>{s}</span>
                              <Circle className="h-4 w-4" />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>Total Franchisees Onboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-semibold">14</div>
                    <Badge variant="secondary" className="rounded-full">+7.4%</Badge>
                  </div>
                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500"></span> Stage 1 (Initial Inquiry)</div>
                      <div>02</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-500"></span> Stage 2 (Document Submission)</div>
                      <div>07</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-indigo-500"></span> Stage 3 (Training)</div>
                      <div>05</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>Key Insights & Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-slate-500">Sales Growth</div>
                      <div className="text-3xl font-semibold">10%</div>
                    </div>
                    <Badge variant="outline" className="rounded-full">Top Performer</Badge>
                  </div>
                  <div className="mt-4 rounded-xl border p-3 text-sm">
                    Franchisees are requesting more detailed training materials.
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>Financial Wellbeing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-500">Total Franchisees</div>
                    <Badge variant="secondary" className="rounded-full">+2.1%</Badge>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="rounded-xl border p-3">
                      <div className="text-xs text-slate-500">Target</div>
                      <div className="text-2xl font-semibold">$500,000</div>
                    </div>
                    <div className="rounded-xl border p-3">
                      <div className="text-xs text-slate-500">Current</div>
                      <div className="text-2xl font-semibold">$450,000</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>My Uploads</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-3 flex items-center gap-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"/>
                      <Input placeholder="Search here.." className="pl-8"/>
                    </div>
                    <Button variant="outline" className="gap-2"><Filter className="h-4 w-4"/> Filters</Button>
                  </div>
                  <div className="overflow-hidden rounded-xl border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Document Name</TableHead>
                          <TableHead>Document Type</TableHead>
                          <TableHead>AI App Inclusion</TableHead>
                          <TableHead>Dashboard Inclusion</TableHead>
                          <TableHead>Stage Access</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {rows.map((r) => (
                          <TableRow key={r.name}>
                            <TableCell className="font-medium flex items-center gap-2">
                              <span className="inline-flex h-5 w-8 items-center justify-center rounded bg-red-100 text-[10px] font-semibold text-red-600">{r.ext}</span>
                              {r.name}
                              <span className="ml-2 text-xs text-slate-400">{r.size}</span>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline" className="rounded-full">{r.type}</Badge>
                            </TableCell>
                            <TableCell><Switch defaultChecked={r.ai} /></TableCell>
                            <TableCell><Switch defaultChecked={r.dashboard} /></TableCell>
                            <TableCell>{r.stage}</TableCell>
                            <TableCell className="text-right space-x-2">
                              <Button variant="ghost" size="sm">Delete</Button>
                              <Button variant="ghost" size="sm">Edit</Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>Prospect Leads</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {leads.map((l) => (
                    <div key={l.name} className="flex items-center justify-between rounded-xl border p-3">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={l.avatar} />
                          <AvatarFallback>{l.name.split(" ").map(n=>n[0]).join("")}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{l.name}</div>
                          <div className="text-xs text-slate-500">Stage: Initial Inquiry</div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">View</Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="rounded-xl border p-3">You have <span className="font-medium">3</span> pending questions.</div>
                  <div className="rounded-xl border p-3">System update scheduled for Friday 9:00 PM.</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// --- Mock Data ---
const rows = [
  { name: "Tech requirements.pdf", ext: "PDF", size: "200 KB", type: "Legal", ai: true, dashboard: true, stage: "Full" },
  { name: "Dashboard screenshot.jpg", ext: "JPG", size: "720 KB", type: "Vendors & Assets", ai: true, dashboard: true, stage: "Onboarding" },
  { name: "Dashboard prototype recording.mp4", ext: "MP4", size: "16 MB", type: "Technology", ai: false, dashboard: true, stage: "Franchisee" },
  { name: "Financial Overview", ext: "DOC", size: "4.2 MB", type: "Financial", ai: true, dashboard: false, stage: "Prospect" },
  { name: "UX Design Guidelines.docx", ext: "DOCX", size: "400 KB", type: "Legal", ai: false, dashboard: true, stage: "Onboarding" },
  { name: "Dashboard interaction.aep", ext: "AEP", size: "12 MB", type: "Legal", ai: true, dashboard: false, stage: "Onboarding" },
  { name: "Briefing call recording.mp3", ext: "MP3", size: "18.6 MB", type: "Financial", ai: false, dashboard: true, stage: "Prospect" },
];

const leads = [
  { name: "Wade Warren", avatar: "https://i.pravatar.cc/100?img=12" },
  { name: "Ava Wright", avatar: "https://i.pravatar.cc/100?img=32" },
  { name: "Cody Fisher", avatar: "https://i.pravatar.cc/100?img=56" },
];
