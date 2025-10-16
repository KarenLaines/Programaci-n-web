// url base (en Docker) -> backend
const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:8000/api';

async function hide(message){
  const res = await fetch(`${API_BASE}/hide/`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({message})
  });
  return res.json();
}
