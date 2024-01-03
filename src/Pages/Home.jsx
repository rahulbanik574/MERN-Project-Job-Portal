import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'

const Home = () => {

  const [selectedCatagory, setSelectedCatagory] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json").then(res => res.json()).then(data => {
      // console.log(data)
      setJobs(data)
    })
  }, [])
  //console.log(jobs)




  //handle input change 
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  //filter jobs by title
  const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  //console.log(filteredItems)


  //......Radio Filtering......
  const handleChange = (event) => {
    setSelectedCatagory(event.target.value)
  }


  //.....button based filtering.....
  const handleClick = (event) => {
    setSelectedCategory(event.target.value)
  }


  // main function
  const filtereData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    //filtering input items
    if (query) {
      filteredJobs = filteredItems;
    }

    //category filtering
    if (selected) {
      filteredJobs = filteredJobs.filter(({ jobLocation, maxPrice, experienceLevel, salaryType, empLoymentType, postingDate }) => (
jobLocation.toLowerCase() === selected.toLowerCase() ||
parseInt(maxPrice) <= parseInt(selected) ||
salaryType.toLowerCase() === selected.toLowerCase() ||
empLoymentType.toLowerCase() === selected.toLowerCase()
      ))
    }


  }


  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
    </div>
  )
}

export default Home
