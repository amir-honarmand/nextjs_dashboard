import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>صفحه مورد نظر پیدا نشد</h2>
      <Link href="/">بازگشت</Link>
    </div>
  )
}