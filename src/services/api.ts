export const base_url = "https://caioohtml.com/pickpallet/json/api/pallets";

export const POST_PALLET = (body: object) => {
  return {
    url: base_url,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};

export const GET_ALL_PALLETS = (total: number) => {
  return {
    url: `${base_url}?_total=${total}`,
  };
};

export const GET_PALLET_BY_ID = (id: number) => {
  return {
    url: `${base_url}/${id}`,
  };
};
