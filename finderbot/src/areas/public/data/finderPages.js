export const finderPages = [
  // =========================
  // Employees
  // =========================

  {
    id: "employee-management",
    title: "Employee Management",
    description: "View and manage employees",
    url: "/employees",
    keywords: [
      "employee",
      "employees",
      "staff",
      "employee management",
      "manage employees",
      "employee list",
      "staff list",
    ],
  },

  {
    id: "add-employee",
    title: "Add Employee",
    description: "Create a new employee",
    url: "/employees/add",
    keywords: [
      "add employee",
      "new employee",
      "create employee",
      "employee registration",
      "register employee",
      "new staff",
    ],
  },

  {
    id: "employee-profile",
    title: "Employee Profile",
    description: "View employee personal and work information",
    url: "/employees/profile",
    keywords: [
      "employee profile",
      "staff profile",
      "employee details",
      "staff details",
      "employee information",
    ],
  },

  {
    id: "employee-documents",
    title: "Employee Documents",
    description: "View and manage employee documents",
    url: "/employees/documents",
    keywords: [
      "employee documents",
      "staff documents",
      "employee files",
      "documents",
      "employee certificates",
      "employee files",
    ],
  },

  // =========================
  // Attendance
  // =========================

  {
    id: "attendance",
    title: "Attendance",
    description: "View and manage employee attendance",
    url: "/attendance",
    keywords: [
      "attendance",
      "employee attendance",
      "staff attendance",
      "present",
      "absent",
      "check attendance",
      "attendance list",
    ],
  },

  {
    id: "attendance-report",
    title: "Attendance Report",
    description: "View attendance reports and statistics",
    url: "/attendance/reports",
    keywords: [
      "attendance report",
      "attendance reports",
      "attendance statistics",
      "attendance summary",
      "monthly attendance",
      "attendance analysis",
    ],
  },

  {
    id: "late-arrivals",
    title: "Late Arrivals",
    description: "View employees who arrived late",
    url: "/attendance/late",
    keywords: [
      "late",
      "late employees",
      "late arrivals",
      "late attendance",
      "late coming",
    ],
  },

  // =========================
  // Leave
  // =========================

  {
    id: "leave-management",
    title: "Leave Management",
    description: "Manage employee leave and leave requests",
    url: "/leave",
    keywords: [
      "leave",
      "employee leave",
      "leave management",
      "leave request",
      "vacation",
      "time off",
      "holiday leave",
    ],
  },

  {
    id: "leave-requests",
    title: "Leave Requests",
    description: "Review pending employee leave requests",
    url: "/leave/requests",
    keywords: [
      "leave requests",
      "pending leave",
      "leave approval",
      "approve leave",
      "leave applications",
      "employee leave requests",
    ],
  },

  {
    id: "leave-balance",
    title: "Leave Balance",
    description: "Check available employee leave balances",
    url: "/leave/balance",
    keywords: [
      "leave balance",
      "remaining leave",
      "available leave",
      "leave days",
      "vacation balance",
      "remaining vacation",
    ],
  },

  // =========================
  // Payroll
  // =========================

  {
    id: "payroll",
    title: "Payroll",
    description: "Manage employee payroll and salary processing",
    url: "/payroll",
    keywords: [
      "payroll",
      "salary",
      "employee salary",
      "salary management",
      "pay employees",
      "salary processing",
    ],
  },

  {
    id: "salary-slips",
    title: "Salary Slips",
    description: "View and download employee salary slips",
    url: "/payroll/salary-slips",
    keywords: [
      "salary slip",
      "salary slips",
      "payslip",
      "payslips",
      "pay slip",
      "employee payslip",
      "download salary slip",
    ],
  },

  {
    id: "salary-history",
    title: "Salary History",
    description: "View employee salary history",
    url: "/payroll/history",
    keywords: [
      "salary history",
      "previous salary",
      "salary records",
      "salary changes",
      "employee salary history",
    ],
  },

  // =========================
  // Recruitment
  // =========================

  {
    id: "recruitment",
    title: "Recruitment",
    description: "Manage recruitment and hiring activities",
    url: "/recruitment",
    keywords: [
      "recruitment",
      "hiring",
      "hire",
      "new hiring",
      "recruit employees",
      "recruitment management",
    ],
  },

  {
    id: "job-postings",
    title: "Job Postings",
    description: "Create and manage job openings",
    url: "/recruitment/jobs",
    keywords: [
      "job",
      "jobs",
      "job posting",
      "job postings",
      "job openings",
      "vacancy",
      "vacancies",
      "open positions",
    ],
  },

  {
    id: "candidates",
    title: "Candidates",
    description: "View and manage job candidates",
    url: "/recruitment/candidates",
    keywords: [
      "candidate",
      "candidates",
      "applicants",
      "job applicants",
      "applicant list",
      "job candidates",
    ],
  },

  // =========================
  // Performance
  // =========================

  {
    id: "performance",
    title: "Performance Management",
    description: "Manage employee performance and evaluations",
    url: "/performance",
    keywords: [
      "performance",
      "employee performance",
      "performance management",
      "employee evaluation",
      "evaluation",
      "appraisal",
      "performance review",
    ],
  },

  {
    id: "performance-reviews",
    title: "Performance Reviews",
    description: "Conduct and review employee performance assessments",
    url: "/performance/reviews",
    keywords: [
      "performance review",
      "performance reviews",
      "employee review",
      "employee appraisal",
      "appraisal review",
      "employee assessment",
    ],
  },

  // =========================
  // Departments
  // =========================

  {
    id: "departments",
    title: "Departments",
    description: "Manage company departments",
    url: "/departments",
    keywords: [
      "department",
      "departments",
      "manage departments",
      "company departments",
      "department management",
      "teams",
    ],
  },

  {
    id: "design-department",
    title: "Design Department",
    description: "View employees and information for the design department",
    url: "/departments/design",
    keywords: [
      "design department",
      "design team",
      "design employees",
      "design staff",
    ],
  },

  {
    id: "engineering-department",
    title: "Engineering Department",
    description: "View employees and information for the engineering department",
    url: "/departments/engineering",
    keywords: [
      "engineering department",
      "engineering team",
      "engineering employees",
      "developers",
      "development team",
    ],
  },

  // =========================
  // Reports
  // =========================

  {
    id: "reports",
    title: "Reports",
    description: "View HR and employee reports",
    url: "/reports",
    keywords: [
      "reports",
      "report",
      "hr reports",
      "employee reports",
      "company reports",
      "analytics",
    ],
  },

  {
    id: "employee-report",
    title: "Employee Report",
    description: "Generate detailed employee reports",
    url: "/reports/employees",
    keywords: [
      "employee report",
      "employee reports",
      "staff report",
      "employee data report",
      "employee statistics",
    ],
  },

  {
    id: "payroll-report",
    title: "Payroll Report",
    description: "View payroll and salary reports",
    url: "/reports/payroll",
    keywords: [
      "payroll report",
      "salary report",
      "payroll statistics",
      "salary statistics",
      "payroll summary",
    ],
  },

  // =========================
  // Expenses
  // =========================

  {
    id: "expenses",
    title: "Expenses",
    description: "Manage employee and company expenses",
    url: "/expenses",
    keywords: [
      "expenses",
      "expense",
      "employee expenses",
      "company expenses",
      "expense management",
      "expense claims",
    ],
  },

  {
    id: "expense-requests",
    title: "Expense Requests",
    description: "Review and approve employee expense requests",
    url: "/expenses/requests",
    keywords: [
      "expense requests",
      "expense approval",
      "approve expense",
      "pending expenses",
      "expense claims",
    ],
  },

  // =========================
  // Documents
  // =========================

  {
    id: "documents",
    title: "Documents",
    description: "Manage company and employee documents",
    url: "/documents",
    keywords: [
      "documents",
      "files",
      "company documents",
      "file management",
      "document management",
      "files management",
    ],
  },

  {
    id: "company-documents",
    title: "Company Documents",
    description: "View and manage company-wide documents",
    url: "/documents/company",
    keywords: [
      "company documents",
      "company files",
      "organization documents",
      "official documents",
      "company files",
    ],
  },

  // =========================
  // Settings
  // =========================

  {
    id: "settings",
    title: "Settings",
    description: "Manage application and company settings",
    url: "/settings",
    keywords: [
      "settings",
      "configuration",
      "preferences",
      "app settings",
      "system settings",
      "company settings",
    ],
  },

  {
    id: "user-management",
    title: "User Management",
    description: "Manage portal users and their access",
    url: "/settings/users",
    keywords: [
      "users",
      "user management",
      "portal users",
      "manage users",
      "user access",
      "accounts",
    ],
  },

  {
    id: "roles-permissions",
    title: "Roles & Permissions",
    description: "Manage user roles and permissions",
    url: "/settings/roles",
    keywords: [
      "roles",
      "permissions",
      "role management",
      "user permissions",
      "access control",
      "roles permissions",
    ],
  },

  // =========================
  // Dashboard
  // =========================

  {
    id: "dashboard",
    title: "Dashboard",
    description: "View company and HR overview",
    url: "/dashboard",
    keywords: [
      "dashboard",
      "home",
      "overview",
      "hr dashboard",
      "company overview",
      "summary",
    ],
  },
];