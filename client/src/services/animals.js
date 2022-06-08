const URL = 'http://localhost:3001/api'

export const getAnimalsService = async () => {
  try {
    const res = await fetch(`${URL}/animals`);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err)
  }
}
