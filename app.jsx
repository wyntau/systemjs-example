import 'app.css'

export function test(){
  return <div></div>
}

export function run(){
  document.getElementById('content').innerHTML = 'inserted from app.js'
}
