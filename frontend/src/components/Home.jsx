import React from 'react'

function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-6">
      <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
        Employee Management Made Simple
      </span>
      <h1 className="text-6xl font-extrabold tracking-tight text-slate-900 mb-8 max-w-3xl leading-tight">
        Master Your Workforce with <span className="gradient-text">Precision</span>
      </h1>
      <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
        Experience a seamless and intuitive portal for managing employee information, attendance, and corporate resources. Built for modern teams that value efficiency and clarity.
      </p>
      <div className="flex gap-4">
        <button className="btn-primary">Get Started</button>
        <button className="btn-secondary">Learn More</button>
      </div>
    </div>
  )
}

export default Home