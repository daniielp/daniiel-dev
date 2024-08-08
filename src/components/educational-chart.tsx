"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { ChartConfig } from "@/components/ui/chart";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { Degree: "frontend", studyDuration: 2.9, fill: "var(--color-frontend)" },
  { Degree: "backend", studyDuration: 2.5, fill: "var(--color-backend)" },
  { Degree: "design", studyDuration: 2, fill: "var(--color-design)" },
];

const chartConfig = {
  studyDuration: {
    label: "Study Duration",
  },
  frontend: {
    label: "Web Developer - Frontend Development",
    color: "hsl(221.2 83.2% 53.3%)",
  },
  backend: {
    label: "Multimedia Integrator - Backend Develeopment",
    color: "hsl(212 95% 68%)",
  },
  design: {
    label: "Multimedia Designer - UI/UX",
    color: "hsl(216 92% 60%)",
  },
} satisfies ChartConfig;

export function EducationalChart() {
  const totalYears = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.studyDuration, 0);
  }, []);

  return (
    <Card className="flex flex-col border-none bg-transparent shadow-none">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="studyDuration"
              nameKey="Degree"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {(totalYears).toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total Years Spent
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          My Educational Journey: A Slice of Life
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total years spent on each degree
        </div>
      </CardFooter>
    </Card>
  );
}
