const StarWrapper = (Component, idName, date) =>
    function HOC() {
      return (
        <section className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0`}>
          <span className="hash-span" id={idName}>
            &nbsp;
          </span>
  
          <div className="text-center mb-5">
            <p className="text-secondary text-[16px] font-semibold">{date}</p> {/* Displaying the date */}
          </div>
  
          <Component />
        </section>
      );
    };
  
  export default StarWrapper;
  