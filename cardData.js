const cardData = [ { id : 1, image : `images/Bitmap.png`, First_Name : `Anallese`, department : `Marketing`, text : `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ` },
                   { id : 2, image : `images/Bitmap.png`, First_Name : `Theodosia`, department : `Product Management`, text : `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.` },

                   { id : 19, image : `images/Bitmap.png`, First_Name : `Ingrim`, department : `Research and Development`, text : `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ` },
                   { id : 20, image : `images/Bitmap.png`, First_Name : `Hewet`, department : `Sales`, text : `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ` },
                   { id : 21, image : `images/Bitmap.png`, First_Name : `Estele`, department : `Services`, text : `Curabitur in libero ut massa volutpat convallis.` },
                   { id : 22, image : `images/Bitmap.png`, First_Name : `Vikky`, department : `Legal`, text : `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ` },
                   { id : 23, image : `images/Bitmap.png`, First_Name : `Cissiee`, department : `Engineering`, text : `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ` },
                   { id : 24, image : `images/Bitmap.png`, First_Name : `Dyana`, department : `Product Management`, text : `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ` },
                   { id : 25, image : `images/Bitmap.png`, First_Name : `Daron`, department : `Sales`, text : `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ` },
                   { id : 26, image : `images/Bitmap.png`, First_Name : `Conchita`, department : `Marketing`, text : `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ` },
                   { id : 27, image : `images/Bitmap.png`, First_Name : `Kevin`, department : `Support`, text : `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ` },
                   { id : 43, image : `images/Bitmap.png`, First_Name : `Marrilee`, department : `Legal`, text : `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ` },
                   { id : 43, image : `images/Bitmap.png`, First_Name : `Marrilee`, department : `Legal`, text : `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ` } ],

      newData = () => cardData,

      doctorData = [ { template : `Pediatric BMT`,
                       image    : `images/doctor.png`,
                       name     : `Cortie`,
                       degree   : `MD, MRCP, PhD,CCT

`,
                       dept      : `Lead & Sr. Consultant - Medical Oncology & Haematology`,
                       statement : `Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.`,
                       button    : `Know More` },
                     { template : `Pediatric BMT`,
                       image    : `images/doctor.png`,
                       name     : `Lisa`,
                       degree   : `MD, MRCP, PhD,CCT

`,
                       dept      : `Lead & Sr. Consultant - Medical Oncology & Haematology`,
                       statement : `Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.`,
                       button    : `Know More` },
                     { template : `Pediatric BMT`,
                       image    : `images/doctor.png`,
                       name     : `Rolfe`,
                       degree   : `MD, MRCP, PhD,CCT
`,
                       dept      : `Lead & Sr. Consultant - Medical Oncology & Haematology`,
                       statement : `Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.`,
                       button    : `Know More` },
                     { template : `Pediatric BMT`,
                       image    : `images/doctor.png`,
                       name     : `Oralee`,
                       degree   : `MD, MRCP, PhD,CCT

`,
                       dept      : `Lead & Sr. Consultant - Medical Oncology & Haematology`,
                       statement : `Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.`,
                       button    : `Know More` },
                     { template : `Pediatric BMT`, image : `images/doctor.png`, name : `Aeriel`, degree : `MD, MRCP, PhD,CCT`, dept : `Lead & Sr. Consultant - Medical Oncology & Haematology`, statement : `Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.`, button : `Know More` },
                     { template : `Pediatric BMT`, image : `images/doctor.png`, name : `Rayner`, degree : `MD, MRCP, PhD,CCT`, dept : `Lead & Sr. Consultant - Medical Oncology & Haematology`, statement : `Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.`, button : `Know More` },
                     { template : `Pediatric BMT`, image : `images/doctor.png`, name : `Starla`, degree : `MD, MRCP, PhD,CCT`, dept : `Lead & Sr. Consultant - Medical Oncology & Haematology`, statement : `Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.`, button : `Know More` },
                     { template : `Pediatric BMT`, image : `images/doctor.png`, name : `Marys`, degree : `MD, MRCP, PhD,CCT`, dept : `Support`, statement : `Dilation of R Pulm Art with Intralum Dev, Perc Endo Approach`, button : `Know More` },
                     { template : `Pediatric BMT`, image : `images/doctor.png`, name : `Haven`, degree : `MD, MRCP, PhD,CCT`, dept : `Lead & Sr. Consultant - Medical Oncology & Haematology`, statement : `Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.`, button : `Know More` },
                     { template : `Pediatric BMT`, image : `images/doctor.png`, name : `Gerianna`, degree : `MD, MRCP, PhD,CCT`, dept : `Lead & Sr. Consultant - Medical Oncology & Haematology`, statement : `Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.`, button : `Know More` } ],

      newDoctorData = () => doctorData,

      warningData = [
        {
          image : `images/card1.png`,
          text  : `Failure to thrive – not gaining weight and height as per the age norms`,
        },
        {
          image : `images/card1.png`,
          text  : `Failure to thrive – not gaining weight and height as per the age norms`,
        },
        {
          image : `images/card1.png`,
          text  : `Failure to thrive – not gaining weight and height as per the age norms.`,
        },
        {
          image : `images/card1.png`,
          text  : `Failure to thrive – not gaining weight and height as per the age norms`,
        },
        {
          image : `images/card1.png`,
          text  : `Failure to thrive – not gaining weight and height as per the age norms`,
        },
        {
          image : `images/card1.png`,
          text  : `Failure to thrive – not gaining weight and height as per the age norms`,
        },
        {
          image : `images/card1.png`,
          text  : `Failure to thrive – not gaining weight and height as per the age norms`,
        },
        {
          image : `images/card1.png`,
          text  : `Failure to thrive – not gaining weight and height as per the age norms`,
        },
        {
          image : `images/card1.png`,
          text  : `Failure to thrive – not gaining weight and height as per the age norms`,
        },
        {
          image : `images/card1.png`,
          text  : `Failure to thrive – not gaining weight and height as per the age norms`,
        },
        {
          image : `images/card1.png`,
          text  : `Failure to thrive – not gaining weight and height as per the age norms`,
        },
        {
          image : `images/card1.png`,
          text  : `Failure to thrive – not gaining weight and height as per the age norms`,
        },
        {
          image : `images/card1.png`,
          text  : `Failure to thrive – not gaining weight and height as per the age norms`,
        },
        {
          image : `images/card1.png`,
          text  : `Failure to thrive – not gaining weight and height as per the age norms`,
        },
        {
          image : `images/card1.png`,
          text  : `Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.`,
        },
      ],
      warningSign = () => warningData,

      boneData = [
        {
          id       : 1,
          question : `What are the conditions that requireBone Marrow Transplant?`,
          text     : `Failure to thrive – not gaining weight and height as per the age norms`,
        },
        { id       : 2,
          question : `What are the conditions that requireBone Marrow Transplant?`,
          text     : `Failure to thrive – not gaining weight and height as per the age norms.` },
        { id       : 3,
          question : `What are the conditions that requireBone Marrow Transplant?`,
          text     : `Failure to thrive – not gaining weight and height as per the age norms` },
        { id       : 4,
          question : `What are the conditions that requireBone Marrow Transplant?`,
          text     : `Failure to thrive – not gaining weight and height as per the age norms` },
        { id       : 5,
          question : `What are the conditions that requireBone Marrow Transplant?`,
          text     : `Failure to thrive – not gaining weight and height as per the age norms` },
        { id       : 6,
          question : `What are the conditions that requireBone Marrow Transplant?`,
          text     : `Failure to thrive – not gaining weight and height as per the age norms` },
        { id       : 7,
          question : `What are the conditions that requireBone Marrow Transplant?`,
          text     : `Failure to thrive – not gaining weight and height as per the age norms` },
        { id       : 8,
          question : `What are the conditions that requireBone Marrow Transplant?`,
          text     : `Failure to thrive – not gaining weight and height as per the age norms` },
        { id       : 9,
          question : `What are the conditions that requireBone Marrow Transplant?`,
          text     : `Failure to thrive – not gaining weight and height as per the age norms` },
        { id       : 10,
          question : `What are the conditions that requireBone Marrow Transplant?`,
          text     : `Failure to thrive – not gaining weight and height as per the age norms` },
        { id       : 11,
          question : `What are the conditions that requireBone Marrow Transplant?`,
          text     : `Failure to thrive – not gaining weight and height as per the age norms` },
        { id       : 12,
          question : `What are the conditions that requireBone Marrow Transplant?`,
          text     : `Failure to thrive – not gaining weight and height as per the age norms` },
        { id       : 13,
          question : `What are the conditions that requireBone Marrow Transplant?`,
          text     : `Failure to thrive – not gaining weight and height as per the age norms` },
        { id       : 14,
          question : `What are the conditions that requireBone Marrow Transplant?`,
          text     : `Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.` },
      ],

      boneMarrow = () => boneData;