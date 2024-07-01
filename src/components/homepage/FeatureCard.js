import React from 'react'

export default function FeatureCard({title, content, icon}) {
  return (
      <div className="feature-card">
          
          <div>
              <h3>{title}</h3>
              <p>{content}</p>
              <p>{content}</p>
              <p>{content}</p>
          </div>
      </div>
  )
}
