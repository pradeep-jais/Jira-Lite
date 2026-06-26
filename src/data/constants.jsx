import {
  UserRoundKey,
  LayoutDashboard,
  ListTodo,
  MonitorSmartphone,
  SquareCheckBig,
  Sparkles,
} from "lucide-react";

export const features = [
  {
    title: "Auth Protected Workspace",
    description:
      "Secure Firebase Auth with persistent sessions. Protected routes that guard every page of the app.",
    icon: UserRoundKey,
    iconColor: "text-yellow-500",
    tags: ["Firebase Auth", "Protected Routes", "Persistent Sessions"],
  },
  {
    title: "Project Dashboard",
    description:
      "Manage multiple projects with a clean and scalable dashboard workflow.",
    icon: LayoutDashboard,
    iconColor: "text-primary",
    tags: ["React Router", "Dynamic Routing"],
  },
  {
    title: "Task Management",
    description:
      "Create, update, organize, and track tasks with smooth modal workflows and real-time status tracking.",
    icon: ListTodo,
    iconColor: "text-green-500",
    tags: ["Firestore", "Modal"],
  },
  {
    title: "Responsive Sidebar",
    description:
      "Adaptive sidebar experience optimized for desktop, tablet, and mobile with smooth transitions.",
    icon: MonitorSmartphone,
    iconColor: "text-blue-500",
    tags: ["Responsive"],
  },
  {
    title: "Status Tracking",
    description:
      "Visual progress indicators for Pending, In Progress, and Completed tasks with color-coded status.",
    icon: SquareCheckBig,
    iconColor: "text-primary",
    tags: ["Kanban"],
  },
  {
    title: "Clean Architecture",
    description:
      "Service-oriented architecture with reusable hooks and scalable structure.",
    icon: Sparkles,
    iconColor: "text-pink-500",
    tags: ["Best Practices"],
  },
];
