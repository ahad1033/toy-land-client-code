

const Gallery = () => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold text-center">Fancy Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:p-40 md:px-5">
        <img
          className="w-full h-auto"
          src="https://images.unsplash.com/photo-1630740281980-fbe4ff28a849?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <img
          className="w-full h-auto"
          src="https://images.unsplash.com/photo-1594787317357-dcda50fd1d78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <img
          className="w-full h-auto"
          src="https://images.unsplash.com/photo-1642242413438-43b00a492ef9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80"
          alt=""
        />
        <img
          className="w-full h-auto"
          src="https://images.unsplash.com/photo-1511415518647-9e5da4fd803f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Gallery;
