import React from 'react'

export default function FeatureCard({title, content, icon}) {
  return (
      <div className="feature-card">
          <div className="feature-icon">
              <i className={'fa ' + icon}></i>
          </div>
          <div>
              <h3>{title}</h3>
              <p>{content}</p>
          </div>
      </div>
  )
}
