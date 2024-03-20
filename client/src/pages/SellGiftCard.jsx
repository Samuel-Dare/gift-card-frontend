// import { useState } from 'react';
// import PinInput from 'react-pin-input';

// import ReusableInput from '../ui/ReusableInput';
// import H1 from '../ui/H1';
// import Button from '../ui/Button';

// const SellGiftCard = () => {
//   const [formData, setFormData] = useState({
//     product: '',
//     amount: '',
//     country: '',
//     type: '',
//     ePin: '',
//     giftCardImage: '',
//   });

//   const handleChange = (e) => {
//     if (e.target.type === 'file') {
//       // Handle file upload separately
//       handleFileUpload(e);
//     } else if (e.target.id.startsWith('ePin')) {
//       // Handle changes for the ePin input
//       const { id, value } = e.target;
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         ePin: prevFormData.ePin + value.replace(/\D/g, ''), // Concatenate new value with existing ePin
//       }));
//     } else {
//       // For other input fields, update form data as usual
//       setFormData({
//         ...formData,
//         [e.target.id]: e.target.value,
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Create form data object to send to the server
//     const formDataToSend = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       formDataToSend.append(key, value);
//     });

//     try {
//       // Send POST request to server
//       const response = await fetch(
//         'http://localhost/my_php_projects/gift-card-backend/gift-cards',
//         {
//           method: 'POST',
//           body: formDataToSend, // Use formData directly, don't stringify or set Content-Type
//         },
//       );

//       if (!response.ok) {
//         console.error('Failed to sell gift card.');
//       }

//       console.log('Gift card sold successfully!');
//     } catch (error) {
//       // Handle network or other errors
//       console.error('Error selling gift card:', error);
//     }
//   };

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0]; // Get the uploaded file
//     if (file) {
//       // Perform file validation if needed
//       const allowedTypes = ['image/jpeg', 'image/png'];
//       if (!allowedTypes.includes(file.type)) {
//         console.log('Invalid file type. Please upload a JPEG or PNG image.');
//         return;
//       }
//       const maxSizeMB = 5;
//       if (file.size > maxSizeMB * 1024 * 1024) {
//         console.log(`File size exceeds ${maxSizeMB} MB limit.`);
//         return;
//       }
//       // If validation passes, update the form data state
//       setFormData({
//         ...formData,
//         giftCardImage: file,
//       });
//     }
//   };

//   return (
//     <div className="md:mx-auto md:w-1/2">
//       <H1 title="Sell Gift Card" />
//       <form onSubmit={handleSubmit}>
//         <ReusableInput
//           label="product"
//           type="text"
//           value={formData.product}
//           onChange={handleChange}
//           required
//         />

//         <ReusableInput
//           label="country"
//           type="text"
//           value={formData.country}
//           onChange={handleChange}
//           required
//         />
//         <ReusableInput
//           label="amount"
//           type="text"
//           value={formData.amount}
//           onChange={handleChange}
//           required
//         />
//         <div className="mb-5 mt-5 flex items-center md:mb-8">
//           <select
//             id="type"
//             value={formData.type}
//             onChange={handleChange}
//             className="border-colorBrand1 my-2 block border-2 bg-colorGrey200 p-2 hover:border-colorBrand2 focus:border-colorBrand2"
//           >
//             <option value="">Select Type</option>
//             <option value="virtual">Virtual</option>
//             <option value="physical">Physical</option>
//           </select>
//           <div className="ml-auto">
//             {formData.type === 'virtual' ? (
//               <>
//                 <label className="mb-2 block text-sm font-bold text-colorGrey700">
//                   enter e-pin
//                 </label>
//                 <PinInput
//                   length={6}
//                   initialValue=""
//                   secretDelay={200}
//                   focus
//                   onChange={(value, index) => {}}
//                   type="numeric"
//                   inputMode="number"
//                   style={{}}
//                   inputStyle={{ borderColor: '#1992D2' }}
//                   inputFocusStyle={{ borderColor: '#2c6cbc' }}
//                   onComplete={(value, index) => {}}
//                   autoSelect={true}
//                 />
//               </>
//             ) : formData.type === 'physical' ? (
//               <>
//                 <label className="mb-2 block text-sm font-bold text-colorGrey700">
//                   upload gift card image
//                 </label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   className="block"
//                   onChange={handleChange}
//                 />
//               </>
//             ) : (
//               ''
//             )}
//           </div>
//         </div>
//         <Button type="primary">Sell Gift Card</Button>
//       </form>
//     </div>
//   );
// };

// export default SellGiftCard;

import { useState } from 'react';
import PinInput from 'react-pin-input';

import ReusableDropdownInput from '../ui/ReusableDropDownInput';
import H1 from '../ui/H1';
import Button from '../ui/Button';
import Animation from '../utils/Animation';

const SellGiftCard = () => {
  const [isPinInputed, setIsPinInputed] = useState(false);
  const [formData, setFormData] = useState({
    product: '',
    country: '',
    value: '',
    rate: '',
    type: '',
    ePin: '',
    image: '',
  });

  console.log(formData);
  console.log(isPinInputed);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handlePinChange = (value) => {
    setFormData({
      ...formData,
      ePin: value,
    });
  };

  const handleFileUpload = (e) => {
    if (e.target.type === 'file') {
      const file = e.target.files[0]; // Get the uploaded file
      if (file) {
        // Perform file validation if needed
        const allowedTypes = ['image/jpeg', 'image/png'];
        if (!allowedTypes.includes(file.type)) {
          console.log('Invalid file type. Please upload a JPEG or PNG image.');
          return;
        }
        const maxSizeMB = 5;
        if (file.size > maxSizeMB * 1024 * 1024) {
          console.log(`File size exceeds ${maxSizeMB} MB limit.`);
          return;
        }
        // If validation passes, update the form data state
        setFormData({
          ...formData,
          image: file,
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('1', isPinInputed);
    console.log('2', formData.type);

    if (!isPinInputed && formData.type === 'Virtual') {
      return alert('enter your e-pin');
    }

    // Create form data object to send to the server
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      // Send POST request to server
      const response = await fetch(
        'http://localhost/my_php_projects/gift-card-backend/gift-cards',
        {
          method: 'POST',
          body: formDataToSend, // Use formData directly, don't stringify or set Content-Type
        },
      );

      if (!response.ok) {
        return console.error('Failed to sell gift card.');
      }

      console.log('Gift card sold successfully!');
    } catch (error) {
      // Handle network or other errors
      return console.error('Error selling gift card:', error);
    }
  };

  return (
    <div className="md:mx-auto md:w-1/2">
      <H1 title="Sell Gift Card" />
      <Animation type="2">
        <form onSubmit={handleSubmit}>
          <ReusableDropdownInput
            label="product"
            options={['Amazon', 'Ebay']}
            value={formData.product}
            onChange={handleChange}
            required={true}
          />
          <ReusableDropdownInput
            label="country"
            options={['UK', 'US']}
            value={formData.country}
            onChange={handleChange}
            required={true}
          />
          <div className="md:flex md:gap-10">
            <div className="w-full">
              <ReusableDropdownInput
                label="value"
                options={['100', '200', '300', '400', '500']}
                value={formData.value}
                onChange={handleChange}
                required={true}
              />
            </div>
            <div className="w-full">
              <ReusableDropdownInput
                label="rate"
                options={['100', '200', '300', '400', '500']}
                value={formData.rate}
                onChange={handleChange}
                required={true}
              />
            </div>
          </div>

          <div className="mb-5 mt-3 flex items-center md:mb-8">
            <ReusableDropdownInput
              label="type"
              options={['Virtual', 'Physical']}
              value={formData.type}
              onChange={handleChange}
              required={true}
            />
            <div className="ml-auto">
              {formData.type === 'Virtual' ? (
                <>
                  <label className="mb-2 block text-sm font-bold text-colorGrey700">
                    enter e-pin
                  </label>
                  <PinInput
                    length={6}
                    initialValue=""
                    secretDelay={200}
                    focus
                    onChange={(value, index) => {
                      handlePinChange(value);
                      index === 5 && value.length === 6
                        ? setIsPinInputed(true)
                        : setIsPinInputed(false);
                      console.log('val', value.length);
                      console.log('ind', index);
                    }}
                    type="numeric"
                    inputMode="number"
                    style={{}}
                    inputStyle={{ borderColor: '#000' }}
                    inputFocusStyle={{ borderColor: '#1992D2' }}
                    onComplete={(value, index) => {}}
                    autoSelect={true}
                  />
                </>
              ) : formData.type === 'Physical' ? (
                <>
                  <label className="mb-2 block text-sm font-bold text-colorGrey700">
                    Upload gift card image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    className="block"
                    onChange={handleFileUpload}
                    required
                  />
                </>
              ) : (
                ''
              )}
            </div>
          </div>
          <Button type="primary">Sell Gift Card</Button>
        </form>
      </Animation>
    </div>
  );
};

export default SellGiftCard;
