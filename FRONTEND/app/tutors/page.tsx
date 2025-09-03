"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock, Users, Award, BookOpen, Calendar, Phone, Video, Home } from "lucide-react"

export default function TutorsPage() {
  const [selectedSubject, setSelectedSubject] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")

  const tutors = [
    {
      name: "Dr. Sarah Mitchell",
      subjects: ["Mathematics", "Science"],
      experience: "12 years",
      qualification: "PhD Mathematics, Cambridge",
      rating: 5.0,
      reviews: 47,
      location: "Central London",
      rate: "£80/hour",
      availability: "Mon-Fri evenings, Weekends",
      specialties: ["11+ Maths", "Grammar School Prep", "Independent School Entrance"],
      successRate: "98%",
      image: "/placeholder.svg?height=100&width=100",
      description: "Specialist in advanced mathematics with exceptional track record in 11+ preparation.",
      teachingMethods: ["Online", "In-Person", "Group Sessions"],
    },
    {
      name: "James Thompson",
      subjects: ["English", "Verbal Reasoning"],
      experience: "8 years",
      qualification: "MA English Literature, Oxford",
      rating: 4.9,
      reviews: 32,
      location: "North London",
      rate: "£70/hour",
      availability: "Flexible schedule",
      specialties: ["Creative Writing", "Reading Comprehension", "Verbal Reasoning"],
      successRate: "96%",
      image: "/placeholder.svg?height=100&width=100",
      description: "Expert English tutor with focus on developing strong literacy and reasoning skills.",
      teachingMethods: ["Online", "In-Person"],
    },
    {
      name: "Ms. Priya Sharma",
      subjects: ["Verbal Reasoning", "Non-Verbal Reasoning"],
      experience: "10 years",
      qualification: "MSc Psychology, UCL",
      rating: 5.0,
      reviews: 28,
      location: "West London",
      rate: "£75/hour",
      availability: "Weekdays and Saturdays",
      specialties: ["Reasoning Skills", "Pattern Recognition", "Logic Puzzles"],
      successRate: "97%",
      image: "/placeholder.svg?height=100&width=100",
      description: "Psychology background brings unique insight to reasoning and cognitive skill development.",
      teachingMethods: ["Online", "In-Person", "Home Visits"],
    },
    {
      name: "Mr. David Chen",
      subjects: ["Mathematics", "Non-Verbal Reasoning"],
      experience: "15 years",
      qualification: "MEng Engineering, Imperial College",
      rating: 4.8,
      reviews: 55,
      location: "South London",
      rate: "£85/hour",
      availability: "Evenings and weekends",
      specialties: ["Problem Solving", "Spatial Reasoning", "Advanced Mathematics"],
      successRate: "99%",
      image: "/placeholder.svg?height=100&width=100",
      description: "Engineering background provides systematic approach to mathematical and logical thinking.",
      teachingMethods: ["Online", "In-Person"],
    },
    {
      name: "Mrs. Emma Roberts",
      subjects: ["English", "Mathematics"],
      experience: "6 years",
      qualification: "PGCE Primary Education, King's College",
      rating: 4.9,
      reviews: 23,
      location: "East London",
      rate: "£65/hour",
      availability: "After school hours",
      specialties: ["Foundation Skills", "Confidence Building", "Exam Technique"],
      successRate: "94%",
      image: "/placeholder.svg?height=100&width=100",
      description: "Primary education specialist focused on building strong foundations and exam confidence.",
      teachingMethods: ["Online", "In-Person", "Group Sessions"],
    },
    {
      name: "Dr. Michael Brown",
      subjects: ["All Subjects"],
      experience: "20 years",
      qualification: "PhD Education, Cambridge",
      rating: 5.0,
      reviews: 67,
      location: "Central London",
      rate: "£100/hour",
      availability: "Limited availability",
      specialties: ["Comprehensive Prep", "School Selection", "Interview Preparation"],
      successRate: "100%",
      image: "/placeholder.svg?height=100&width=100",
      description: "Senior education consultant with comprehensive approach to 11+ preparation and school selection.",
      teachingMethods: ["In-Person", "Consultation"],
    },
  ]

  const filteredTutors = tutors.filter((tutor) => {
    const matchesSubject =
      selectedSubject === "all" ||
      tutor.subjects.some((subject) => subject.toLowerCase().includes(selectedSubject.toLowerCase()))
    const matchesLocation =
      selectedLocation === "all" || tutor.location.toLowerCase().includes(selectedLocation.toLowerCase())

    return matchesSubject && matchesLocation
  })

  const getMethodIcon = (method: string) => {
    switch (method) {
      case "Online":
        return <Video className="h-4 w-4" />
      case "In-Person":
        return <Users className="h-4 w-4" />
      case "Home Visits":
        return <Home className="h-4 w-4" />
      case "Group Sessions":
        return <Users className="h-4 w-4" />
      default:
        return <BookOpen className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-700 rounded-full px-4 py-2">👨‍🏫 Expert Tutors</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Find Your Perfect
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}
                11+ Tutor
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with London's most experienced 11+ tutors. All our tutors are DBS checked and have proven track
              records of success.
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="flex gap-2">
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-full bg-white text-sm"
              >
                <option value="all">All Subjects</option>
                <option value="mathematics">Mathematics</option>
                <option value="english">English</option>
                <option value="verbal">Verbal Reasoning</option>
                <option value="non-verbal">Non-Verbal Reasoning</option>
              </select>

              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-full bg-white text-sm"
              >
                <option value="all">All Locations</option>
                <option value="central">Central London</option>
                <option value="north">North London</option>
                <option value="south">South London</option>
                <option value="east">East London</option>
                <option value="west">West London</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Tutors Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredTutors.map((tutor, index) => (
            <Card
              key={index}
              className="border-2 border-border hover:border-blue-500 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <img
                    src={tutor.image || "/placeholder.svg"}
                    alt={tutor.name}
                    className="w-20 h-20 rounded-full border-4 border-blue-100"
                  />
                  <div className="flex-1">
                    <CardTitle className="text-xl text-foreground mb-1">{tutor.name}</CardTitle>
                    <p className="text-sm text-gray-600 mb-2">{tutor.qualification}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(tutor.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                          />
                        ))}
                        <span className="text-sm text-gray-600 ml-1">
                          {tutor.rating} ({tutor.reviews} reviews)
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {tutor.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4" />
                        {tutor.experience}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">{tutor.rate}</div>
                    <div className="text-sm text-gray-600">per hour</div>
                    <div className="text-sm font-semibold text-green-600 mt-1">{tutor.successRate}</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  {tutor.description}
                </CardDescription>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Subjects:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tutor.subjects.map((subject, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tutor.specialties.slice(0, 2).map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                      {tutor.specialties.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{tutor.specialties.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">Teaching Methods:</h4>
                  <div className="flex gap-2">
                    {tutor.teachingMethods.map((method, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
                      >
                        {getMethodIcon(method)}
                        {method}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>{tutor.availability}</span>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 rounded-full bg-transparent">
                    <Calendar className="h-4 w-4 mr-2" />
                    View Profile
                  </Button>
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 rounded-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Book Lesson
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTutors.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">No tutors found matching your criteria.</div>
            <Button
              variant="outline"
              className="mt-4 bg-transparent"
              onClick={() => {
                setSelectedSubject("all")
                setSelectedLocation("all")
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
