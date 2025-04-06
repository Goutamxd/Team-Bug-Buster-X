"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Calendar, Plus, FileText, PieChart, BarChart, Download, Filter } from "lucide-react"

// Mock data for expenses
const expenses = [
  {
    id: 1,
    date: "2025-04-05",
    category: "Consultation",
    description: "Dr. Anil Gupta - Cardiology",
    amount: 1500,
    paymentMethod: "Credit Card",
  },
  {
    id: 2,
    date: "2025-04-03",
    category: "Medication",
    description: "Prescription Medicines - Metro Pharmacy",
    amount: 850,
    paymentMethod: "Cash",
  },
  {
    id: 3,
    date: "2025-03-28",
    category: "Lab Test",
    description: "Blood Test - City Diagnostics",
    amount: 1200,
    paymentMethod: "Insurance",
  },
  {
    id: 4,
    date: "2025-03-20",
    category: "Hospitalization",
    description: "Emergency Room Visit - City General Hospital",
    amount: 5000,
    paymentMethod: "Insurance",
  },
]

// Mock data for summary
const summary = {
  totalSpent: 8550,
  byCategory: [
    { category: "Consultation", amount: 1500 },
    { category: "Medication", amount: 850 },
    { category: "Lab Test", amount: 1200 },
    { category: "Hospitalization", amount: 5000 },
  ],
  byMonth: [
    { month: "January", amount: 3200 },
    { month: "February", amount: 2800 },
    { month: "March", amount: 6200 },
    { month: "April", amount: 2350 },
  ],
}

export default function ExpensesPage() {
  const [selectedMonth, setSelectedMonth] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Medical Expense Tracker</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Track and manage your medical expenses efficiently with detailed reports.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-green-600 mr-2" />
              <span className="text-3xl font-bold">₹{summary.totalSpent.toLocaleString()}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-green-600 mr-2" />
              <span className="text-3xl font-bold">₹{summary.byMonth[3].amount.toLocaleString()}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col space-y-2">
            <Button className="bg-green-600 hover:bg-green-700 w-full">
              <Plus className="h-4 w-4 mr-2" />
              Add Expense
            </Button>
            <Button variant="outline" className="w-full">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="transactions" className="w-full">
        <TabsList className="grid grid-cols-3 w-full max-w-md mb-8">
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions" className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Date Range</label>
                <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                  <SelectTrigger>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Select Month" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Time</SelectItem>
                    <SelectItem value="april">April 2025</SelectItem>
                    <SelectItem value="march">March 2025</SelectItem>
                    <SelectItem value="february">February 2025</SelectItem>
                    <SelectItem value="january">January 2025</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <div className="flex items-center">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Select Category" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="consultation">Consultation</SelectItem>
                    <SelectItem value="medication">Medication</SelectItem>
                    <SelectItem value="labtest">Lab Test</SelectItem>
                    <SelectItem value="hospitalization">Hospitalization</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Search</label>
                <div className="relative">
                  <Input placeholder="Search expenses" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Payment Method
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                  {expenses.map((expense) => (
                    <tr key={expense.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                        {expense.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <Badge
                          variant="outline"
                          className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800"
                        >
                          {expense.category}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-300">{expense.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                        {expense.paymentMethod}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">
                        ₹{expense.amount.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="summary">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="h-5 w-5 mr-2 text-green-600" />
                  Expenses by Category
                </CardTitle>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <div className="text-center">
                  <PieChart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-400">Pie chart visualization of expenses by category</p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2">
                {summary.byCategory.map((item, index) => (
                  <div key={index} className="flex justify-between w-full">
                    <span>{item.category}</span>
                    <span className="font-medium">₹{item.amount.toLocaleString()}</span>
                  </div>
                ))}
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart className="h-5 w-5 mr-2 text-green-600" />
                  Monthly Expenses
                </CardTitle>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <div className="text-center">
                  <BarChart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-400">Bar chart visualization of monthly expenses</p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2">
                {summary.byMonth.map((item, index) => (
                  <div key={index} className="flex justify-between w-full">
                    <span>{item.month}</span>
                    <span className="font-medium">₹{item.amount.toLocaleString()}</span>
                  </div>
                ))}
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reports">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <FileText className="h-5 w-5 mr-2 text-green-600" />
                  Monthly Report
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 dark:text-gray-400">
                Detailed breakdown of all expenses for the current month with categorization and analysis.
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <FileText className="h-5 w-5 mr-2 text-green-600" />
                  Quarterly Report
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 dark:text-gray-400">
                Three-month summary with trends, patterns, and comparison to previous quarters.
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <FileText className="h-5 w-5 mr-2 text-green-600" />
                  Annual Report
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 dark:text-gray-400">
                Comprehensive yearly summary with detailed analytics and tax-related information.
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

