import Header from './Header'
import {Outlet} from 'react-router'

function RootLayout() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="min-h-[80vh]">
          <Outlet />
        </div>
      </main>
      <footer className="py-12 border-t border-slate-200 text-center text-slate-400 text-sm">
        &copy; 2026 EmpPortal. All rights reserved.
      </footer>
    </div>
  )
}

export default RootLayout