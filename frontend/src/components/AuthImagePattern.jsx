const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-gradient-to-r from-base-200 to-base-300 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-primary/10 transition-all duration-300 ease-in-out ${
                i % 2 === 0 ? "animate-pulse" : "hover:scale-105 hover:bg-primary/20"
              } shadow-md hover:shadow-lg`}
            />
          ))}
        </div>
        <h2 className="text-3xl font-bold mb-4 text-base-content">{title}</h2>
        <p className="text-base-content/70 text-lg">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;