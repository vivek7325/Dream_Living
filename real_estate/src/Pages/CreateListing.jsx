import React, { useState } from "react";

const CreateListing = () => {
  const [Data, setData] = useState({
    title: "",
    address: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    type: "house",
    status: "available",
    parking: false,
    furnished: false,
    filename: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setData((Data) => ({
        ...Data,
        [name]: checked,
      }));
    }
    else if (type === "file") {
      setData((Data) => ({
        ...Data,
        [name]: files[0],
      }));
    } else {
      setData((Data) => ({
        ...Data,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(Data);
  };

  return (
    <div className="listing_section">
      <div className="listing_section_left">
        <div className="listing_section_title"><h2>Create New Listing</h2></div>
        <form className="listing_Form" onSubmit={handleSubmit}>

          <div>
            <input
              type="text"
              name="title"
              value={Data.title}
              onChange={handleChange}
              className='search_input'
              placeholder="Title"
            />
          </div>

          <div>
            <input
              type="text"
              name="address"
              value={Data.address}
              onChange={handleChange}
              className='search_input'
              placeholder="Address"
            />

          </div>


          <div>
            <input
              type="number"
              name="price"
              min="50"
              max="10000000"
              value={Data.price}
              onChange={handleChange}
              className='search_input'
              placeholder="Price (in Rupees)"
            />
          </div>


          <div>
            <input
              type="number"
              name="bedrooms"
              min="1"
              max="10"
              value={Data.bedrooms}
              onChange={handleChange}
              className='search_input'
              placeholder="Bedrooms"
            />

          </div>


          <div>
            <input
              type="number"
              name="bathrooms"
              min="1"
              max="10"
              value={Data.bathrooms}
              onChange={handleChange}
              className='search_input'
              placeholder="Bathrooms"
            />
          </div>


          <div>
            <select name="type" className="search_input" style={{ width: '200px' }} value={Data.type} onChange={handleChange}>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="plot">Plot</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>


          <div>
            <select name="status" className="search_input" style={{ width: '200px' }} value={Data.status} onChange={handleChange}>
              <option value="available">Available</option>
              <option value="sold">Sold</option>
            </select>
          </div>

          <div>
            <label>Parking:</label>
            <input
              type="checkbox"
              name="parking"
              checked={Data.parking}
              onChange={handleChange}
              className='search_input'
            />
          </div>


          <div>
            <label>Furnished:</label>
            <input
              type="checkbox"
              name="furnished"
              checked={Data.furnished}
              onChange={handleChange}
              className='search_input'
            />
          </div>




        </form>

      </div>
      <div className="listing_section_right">
        <h3>
          Images:
        </h3>
        <span>
          First image will be cover (max 6)
        </span>
        <br></br>
        <input
          type="file"
          name="filename"
          value={Data.filename}
          onChange={handleChange}
        />

        <button type="submit" className="button">Create Listing</button>
      </div>
      <form>

      </form>
    </div>

  );
}

export default CreateListing;
