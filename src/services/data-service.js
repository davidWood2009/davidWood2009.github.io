const DataService = async () => {
  const result = await fetch("data/data.json");

  console.log("done fetching");
  console.log("result= " + result);
  const obj = await result.json();

  console.log("done converting from json");
  console.log("obj = " + obj);

  return obj.data;
};

export default DataService;
