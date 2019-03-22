import React from 'react'

const Headers = ({courses}) => (
      <h1>{courses.name}</h1>
)

const Content = ({courses}) => {
  const content = courses.map(parts => 
  <p key={parts.id}>
  {parts.name}{': '}{parts.exercises}
  </p>
  )
  return (
    <div>{content}</div>
  )
}

const Total = ({courses}) => {
  const sum = courses.map(parts => 
    parts.exercises).reduce((a, b) => a + b)
  return (
    <p>Yhteensä: {sum}</p>
  )   
}

const Course = ({courses}) => (
  courses.map(content => 
  <div key={content.id}>
    <Headers courses={content} />
    <Content courses={content.parts} />
    <Total courses={content.parts} />
  </div>
  )  
) 

export default Course 