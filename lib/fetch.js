export const getServicesInfo = async () => {
  const res = [
    {
      id: 1,
      slug: "summer",
    },
    {
      id: 2,
      slug: "winter",
    },
    {
      id: 3,
      slug: "spring",
    },
  ];

  // const info = await res.json();

  return res;
};

export const getServiceDetails = async (slug) => {
  const services = [
    {
      id: 1,
      slug: "summer",
      detail: "Lorem 1",
    },
    {
      id: 2,
      slug: "winter",
      detail: "Lorem 2",
    },
    {
      id: 3,
      slug: "spring",
      detail: "Lorem 3",
    },
  ];

  let service;

  services.forEach((item) => {
    if (item.slug == slug) {
      service = item;
    }
  });

  return service;
};
