function Map() {
  return (
    <div className="max-w-[90%] mx-auto  w-full overflow-hidden mt-32 tracking-tighter  text-color-gray-custom">
      <div className="flex flex-col gap-8 md:flex-row">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2499.619876113629!2d55.4241666083863!3d25.127343638924245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2sae!4v1739600002215!5m2!1sar!2sae"
          className="rounded-15  w-full h-[30rem]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="md:w-1/2">
          <p className="text-color-light-gray">Our Location</p>
          <h3 className="text-h5 text-color-dark-meduim mb-8">
            Visit Us in our location
          </h3>

          <div>
            <h4 className="font-semibold">Headquaters</h4>
            <p className="*:block *:text-[1.5rem]">
              <span> Al Syed Al Hashimi LLC. </span>
              <span> Dubai, UAE </span>
              <span> Al Rashdiah center point.</span>
              <span>United Arab Emirates</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
