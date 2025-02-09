"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function EventAnalysis() {
  return (
    <div className="container mx-auto p-4 max-w-2xl space-y-6">
      {/* Event Positioning Score */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium">Your Event Positioning Scores</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <span className="text-green-600 font-medium">Very Good</span>
            <span className="text-sm text-muted-foreground">
              Users from your community loves your event, you have a solid fan base comparing to other event host
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Target Audience Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium">Target Audience Insights</CardTitle>
          <p className="text-sm text-muted-foreground">This is what your average user likes</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Technology</span>
                <span>70%</span>
              </div>
              <Progress value={70} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Science</span>
                <span>70%</span>
              </div>
              <Progress value={70} className="h-2" />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-1">Time Availability</h4>
              <p className="text-sm text-muted-foreground">Wed night, Sat night, Sun night</p>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-1">Ultimate goal of going events</h4>
              <p className="text-sm text-muted-foreground">Land an SWE internship in FAANG</p>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-1">Learning Focus</h4>
              <p className="text-sm text-muted-foreground">Learn React.JS</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Drop-off Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium">Drop-off Analysis</CardTitle>
          <p className="text-sm text-muted-foreground">Main Reasons why users are not going to your events</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <span className="text-2xl font-semibold">50%</span>
              <p className="text-sm text-muted-foreground">
                of People within your community are going to another event called Mindshacks 2025
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}

