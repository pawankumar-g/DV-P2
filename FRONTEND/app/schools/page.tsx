"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { MapPin, Users, Star, Search, ExternalLink, Calendar, TrendingUp, Award, BookOpen } from "lucide-react"

export default function LondonSchoolsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedArea, setSelectedArea] = useState("all")

  const schools = [
    {
      name: "St. Paul's Girls' School",
      type: "Independent",
      area: "Hammersmith",
      rating: 5,
      students: 750,
      examDate: "January 2025",
      subjects: ["Mathematics", "English", "Science", "Reasoning"],
      description: "One of London's most prestigious independent schools for girls aged 11-18.",
      website: "https://spgs.org",
      phone: "020 7603 2288",
      successRate: "98%",
      fees: "£28,000/year",
    },
    {
      name: "King's College School",
      type: "Independent",
      area: "Wimbledon",
      rating: 5,
      students: 1400,
      examDate: "January 2025",
      subjects: ["Mathematics", "English", "Science", "Latin"],
      description: "Leading independent school for boys aged 7-18 with exceptional academic results.",
      website: "https://kcs.org.uk",
      phone: "020 8255 5300",
      successRate: "96%",
      fees: "£26,500/year",
    },
    {
      name: "Henrietta Barnett School",
      type: "Grammar",
      area: "Barnet",
      rating: 5,
      students: 1100,
      examDate: "September 2024",
      subjects: ["Mathematics", "English", "Verbal Reasoning", "Non-Verbal Reasoning"],
      description: "Outstanding grammar school for girls with consistently excellent results.",
      website: "https://hbschool.org.uk",
      phone: "020 8449 2103",
      successRate: "100%",
      fees: "Free",
    },
    {
      name: "Queen Elizabeth's School",
      type: "Grammar",
      area: "Barnet",
      rating: 5,
      students: 1300,
      examDate: "September 2024",
      subjects: ["Mathematics", "English", "Verbal Reasoning", "Non-Verbal Reasoning"],
      description: "Top-performing grammar school for boys with exceptional university progression.",
      website: "https://qebarnet.co.uk",
      phone: "020 8441 4646",
      successRate: "99%",
      fees: "Free",
    },
    {
      name: "Latymer Upper School",
      type: "Independent",
      area: "Hammersmith",
      rating: 5,
      students: 1400,
      examDate: "January 2025",
      subjects: ["Mathematics", "English", "Reasoning", "Interview"],
      description: "Co-educational independent school with strong academic tradition.",
      website: "https://latymer-upper.org",
      phone: "020 8629 2024",
      successRate: "94%",
      fees: "£25,000/year",
    },
    {
      name: "Wilson's School",
      type: "Grammar",
      area: "Sutton",
      rating: 5,
      students: 1200,
      examDate: "September 2024",
      subjects: ["Mathematics", "English", "Verbal Reasoning", "Non-Verbal Reasoning"],
      description: "Selective grammar school for boys with outstanding academic achievements.",
      website: "https://wilsonsschool.sutton.sch.uk",
      phone: "020 8773 2931",
      successRate: "97%",
      fees: "Free",
    },
  ]

  const filteredSchools = schools.filter((school) => {
    const matchesSearch =
      school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.area.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === "all" || school.type.toLowerCase() === selectedType
    const matchesArea = selectedArea === "all" || school.area.toLowerCase().includes(selectedArea.toLowerCase())

    return matchesSearch && matchesType && matchesArea
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-700 rounded-full px-4 py-2">🏫 London Schools Directory</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Find Your Perfect
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}
                London School
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive guide to London's top grammar schools and independent schools with entrance exam
              requirements and success rates.
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search schools or areas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-full border-gray-300"
              />
            </div>

            <div className="flex gap-2">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-full bg-white text-sm"
              >
                <option value="all">All Types</option>
                <option value="grammar">Grammar Schools</option>
                <option value="independent">Independent Schools</option>
              </select>

              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-full bg-white text-sm"
              >
                <option value="all">All Areas</option>
                <option value="north">North London</option>
                <option value="south">South London</option>
                <option value="west">West London</option>
                <option value="central">Central London</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Schools Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredSchools.map((school, index) => (
            <Card
              key={index}
              className="border-2 border-border hover:border-blue-500 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-foreground mb-2">{school.name}</CardTitle>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={school.type === "Grammar" ? "default" : "secondary"} className="rounded-full">
                        {school.type}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{school.area}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(school.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">({school.rating}/5)</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{school.successRate}</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  {school.description}
                </CardDescription>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">{school.students} students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-purple-600" />
                    <span className="text-sm">{school.examDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">{school.fees}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{school.successRate} pass rate</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">Entrance Exam Subjects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {school.subjects.map((subject, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 rounded-full bg-transparent"
                    onClick={() => window.open(school.website, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Website
                  </Button>
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 rounded-full">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Exam Prep
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSchools.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">No schools found matching your criteria.</div>
            <Button
              variant="outline"
              className="mt-4 bg-transparent"
              onClick={() => {
                setSearchTerm("")
                setSelectedType("all")
                setSelectedArea("all")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
