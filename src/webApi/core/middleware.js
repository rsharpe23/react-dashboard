export default function middleware(closure) {
  return closure.call(this);
}