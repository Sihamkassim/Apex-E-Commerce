"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
//   ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", sales: 186, warehouse: 80 },
  { month: "February", sales: 305, mobile: 200 },
  { month: "March", sales: 237, warehouse: 120 },
  { month: "April", sales: 73, warehouse: 190 },
  { month: "May", sales: 209, warehouse: 130 },
  { month: "June", sales: 214, warehouse: 140 },
]

const chartConfig = {
  desktop: {
    label: "sales",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "warehouse",
    color: "hsl(var(--chart-2))",
  },
}

export function BChart() {
  return (
    <Card className='p-6'>
      <CardHeader>
        <CardTitle>Inventory</CardTitle>
        <CardDescription>April - May 2024</CardDescription>
      </CardHeader>
      <CardContent className='py-14'>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="sales" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="warehouse" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
