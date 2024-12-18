import MCQPracticeApp from './MCQPracticeApp'

export default function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/Quiz.jpeg')" }}
    >
      <div className="w-full max-w-lg" style={{ backgroundImage: "url('/Quiz.jpeg')" }}> {/* Added width control here */}
        <MCQPracticeApp />
      </div>
    </div>
  )
}
