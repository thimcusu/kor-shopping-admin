import React from 'react'
import DNALoading, { DNALoadingProps } from './DNALoading'

const LoadingPage = (props: DNALoadingProps) => {
  return (
    <div id="loading-overlay" className="w-full h-full fixed block inset-0 z-50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <DNALoading {...props} />
      </div>
    </div>
  )
}

export default LoadingPage;