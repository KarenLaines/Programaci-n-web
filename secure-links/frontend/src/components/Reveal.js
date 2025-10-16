async function reveal(key){
  const res = await fetch(`${API_BASE}/reveal/${key}/`, {
    method: 'GET',
  });
  return res.json();
}
