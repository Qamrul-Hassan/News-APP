// components/Loading.tsx
export default function Loading() {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-black z-50">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-16 h-16 border-4 border-t-4 border-white rounded-full animate-spin"></div>
        </div>
        <h1 className="text-3xl font-extrabold text-white mt-4 drop-shadow-lg">Loading...</h1>
      </div>
    );
  }
  