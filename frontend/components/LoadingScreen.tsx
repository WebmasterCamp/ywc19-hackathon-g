const LoadingScreen = ({ isLoading }: any) => {
  return (
    <div
      className={
        'fixed top-0 left-0 h-screen flex items-center flex-col w-full bg-white transition duration-300 ease-in-out z-20 justify-center ' +
        (isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none')
      }
    >
      <div className="text-4xl font-semibold text-primary mb-5">มือโปร</div>
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  )
}

export default LoadingScreen
