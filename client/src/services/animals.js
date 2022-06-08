const URL = 'http://localhost:3001/api'

export const createAnimalService = async (input) => {
  try {
    const res = await fetch(`${URL}/animals`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input)
    });

    return res;
  } catch (err) {
    console.log(err);
  }
}

export const getAnimalsService = async () => {
  try {
    const res = await fetch(`${URL}/animals`);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err)
  }
}

export const getAnimalService = async (id) => {
  try {
    const res = await fetch(`${URL}/animals/${id}`);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err)
  }
}

export const updateAnimalService = async (id, input) => {
  try {
    const res = await fetch(`${URL}/animals/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input)
    });

    return res;
  } catch (err) {
    console.log(err)
  }
}

export const deleteAnimalService = async (id) => {
  try {
    const res = await fetch(`${URL}/animals/${id}`, {
      method: 'DELETE',
    });
    console.log(res)

    return res;
  } catch (err) {
    console.log(err)
  }
}