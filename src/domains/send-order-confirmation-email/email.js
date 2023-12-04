const htmlToSend = (name, orderNumber, products) => {
  // Make formatted date
  const timestamp = Date.now();
  const currentDate = new Date(timestamp);

  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
  const year = currentDate.getFullYear();

  const formattedDate = `${day}.${month}.${year}`;
  // Make formatted date

  let total = 0

  const calculateTotalPrice = () => {
    const totalPrice = products.reduce(
      (accumulator, product) => {
        // Parse the price string to a numerical value (assuming the price format is consistent)
        const price = parseFloat(
          product.price.replace("$", "").replace(",", "")
        );

        // Add the price multiplied by the quantity to the accumulator
        return accumulator + price * product.quantity;
      },
      0
    );

    // Convert the number to a string
    total = totalPrice
    const numberString = totalPrice.toString();

    // Use regular expression to insert commas every three digits from the right
    const formattedNumber = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return formattedNumber;
  };

  const tax = 8.21

  const shipping = 5.5

  const totalPriceAfterTaxes = () => {
    return (total + tax + shipping)
  }

  return `<!DOCTYPE html>

  <html
    lang="en"
    xmlns:o="urn:schemas-microsoft-com:office:office"
    xmlns:v="urn:schemas-microsoft-com:vml"
  >
    <head>
      <title></title>
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <!--[if mso
        ]><xml
          ><o:OfficeDocumentSettings
            ><o:PixelsPerInch>96</o:PixelsPerInch
            ><o:AllowPNG /></o:OfficeDocumentSettings></xml
      ><![endif]-->
      <style>
        * {
          box-sizing: border-box;
        }
  
        body {
          margin: 0;
          padding: 0;
        }
  
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: inherit !important;
        }
  
        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
        }
  
        p {
          line-height: inherit;
        }
  
        .desktop_hide,
        .desktop_hide table {
          mso-hide: all;
          display: none;
          max-height: 0px;
          overflow: hidden;
        }
  
        .image_block img + div {
          display: none;
        }
  
        @media (max-width: 700px) {
          .desktop_hide table.icons-inner,
          .social_block.desktop_hide .social-table {
            display: inline-block !important;
          }
  
          .icons-inner {
            text-align: center;
          }
  
          .icons-inner td {
            margin: 0 auto;
          }
  
          .image_block div.fullWidth {
            max-width: 100% !important;
          }
  
          .mobile_hide {
            display: none;
          }
  
          .row-content {
            width: 100% !important;
          }
  
          .stack .column {
            width: 100%;
            display: block;
          }
  
          .mobile_hide {
            min-height: 0;
            max-height: 0;
            max-width: 0;
            overflow: hidden;
            font-size: 0px;
          }
  
          .desktop_hide,
          .desktop_hide table {
            display: table !important;
            max-height: none !important;
          }
        }
      </style>
    </head>
    <body
      style="
        background-color: #e1f0f1;
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: none;
        text-size-adjust: none;
      "
    >
      <table
        border="0"
        cellpadding="0"
        cellspacing="0"
        class="nl-container"
        role="presentation"
        style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          background-color: #e1f0f1;
        "
        width="100%"
      >
        <tbody>
          <tr>
            <td>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-1"
                role="presentation"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  background-color: #e8e2dd;
                "
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          color: #000000;
                          width: 680px;
                          margin: 0 auto;
                        "
                        width="680"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="100%"
                            >
                              <div
                                class="spacer_block block-1"
                                style="
                                  height: 35px;
                                  line-height: 35px;
                                  font-size: 1px;
                                "
                              >
                                 
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-2"
                role="presentation"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  background-color: #e8e2dd;
                  background-image: url('images/bg_hero.png');
                  background-position: center top;
                  background-repeat: no-repeat;
                "
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          color: #000000;
                          width: 680px;
                          margin: 0 auto;
                        "
                        width="680"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="100%"
                            >
                              <div
                                class="spacer_block block-1"
                                style="
                                  height: 35px;
                                  line-height: 35px;
                                  font-size: 1px;
                                "
                              >
                                 
                              </div>
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                class="icons_block block-2"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td
                                    class="pad"
                                    style="
                                      vertical-align: middle;
                                      color: #000000;
                                      font-family: inherit;
                                      font-size: 14px;
                                      text-align: center;
                                    "
                                  >
                                    <table
                                      align="center"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="alignment"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                      "
                                    ></table>
                                  </td>
                                </tr>
                              </table>
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                class="heading_block block-3"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td
                                    class="pad"
                                    style="
                                      padding-left: 10px;
                                      padding-right: 10px;
                                      text-align: center;
                                      width: 100%;
                                    "
                                  >
                                    <h1
                                      style="
                                        margin: 0;
                                        color: #010101;
                                        direction: ltr;
                                        font-family: Arial, Helvetica Neue,
                                          Helvetica, sans-serif;
                                        font-size: 40px;
                                        font-weight: normal;
                                        letter-spacing: normal;
                                        line-height: 120%;
                                        text-align: center;
                                        margin-top: 0;
                                        margin-bottom: 0;
                                        mso-line-height-alt: 48px;
                                      "
                                    >
                                      <strong>Thank you ${name}</strong>
                                    </h1>
                                  </td>
                                </tr>
                              </table>
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                class="heading_block block-4"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td
                                    class="pad"
                                    style="
                                      padding-left: 10px;
                                      padding-right: 10px;
                                      text-align: center;
                                      width: 100%;
                                    "
                                  >
                                    <h1
                                      style="
                                        margin: 0;
                                        color: #010101;
                                        direction: ltr;
                                        font-family: Arial, Helvetica Neue,
                                          Helvetica, sans-serif;
                                        font-size: 39px;
                                        font-weight: normal;
                                        letter-spacing: normal;
                                        line-height: 120%;
                                        text-align: center;
                                        margin-top: 0;
                                        margin-bottom: 0;
                                        mso-line-height-alt: 46.8px;
                                      "
                                    >
                                      <strong>Your order successfully</strong>
                                    </h1>
                                  </td>
                                </tr>
                              </table>
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                class="heading_block block-5"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td
                                    class="pad"
                                    style="
                                      padding-bottom: 15px;
                                      padding-left: 10px;
                                      padding-right: 10px;
                                      text-align: center;
                                      width: 100%;
                                    "
                                  >
                                    <h1
                                      style="
                                        margin: 0;
                                        color: #010101;
                                        direction: ltr;
                                        font-family: Arial, Helvetica Neue,
                                          Helvetica, sans-serif;
                                        font-size: 40px;
                                        font-weight: normal;
                                        letter-spacing: normal;
                                        line-height: 120%;
                                        text-align: center;
                                        margin-top: 0;
                                        margin-bottom: 0;
                                        mso-line-height-alt: 48px;
                                      "
                                    >
                                      <strong>been placed.</strong>
                                    </h1>
                                  </td>
                                </tr>
                              </table>
                              <table
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                class="button_block block-6"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td class="pad">
                                    <div align="center" class="alignment">
                                      <!--[if mso]>
  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.example.com" style="height:48px;width:215px;v-text-anchor:middle;" arcsize="10%" strokeweight="0.75pt" strokecolor="#010101" fill="false">
  <w:anchorlock/>
  <v:textbox inset="0px,0px,0px,0px">
  <center style="color:#010101; font-family:Arial, sans-serif; font-size:16px">
  <!
                                      [endif]--><!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                    </div>
                                  </td>
                                </tr>
                              </table>
  
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                class="image_block block-7"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td
                                    class="pad"
                                    style="
                                      padding-left: 10px;
                                      padding-right: 10px;
                                      padding-top: 20px;
                                      width: 100%;
                                    "
                                  >
                                    <div
                                      align="center"
                                      class="alignment"
                                      style="line-height: 10px"
                                    >
                                      <div
                                        class="fullWidth"
                                        style="max-width: 272px"
                                      >
                                        <img
                                          alt="Skin Care"
                                          src="https://res.cloudinary.com/ddnfqpa6v/image/upload/v1701416223/confrimed_stamp_middle_1_xtmt0h.png"
                                          style="
                                            display: block;
                                            height: auto;
                                            border: 0;
                                            width: 100%;
                                          "
                                          title="Skin Care"
                                          width="272"
                                        />
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
  
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
  
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-4"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          color: #000000;
                          width: 680px;
                          margin: 0 auto;
                        "
                        width="680"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="100%"
                            >
                              <div
                                class="spacer_block block-1"
                                style="
                                  height: 35px;
                                  line-height: 35px;
                                  font-size: 1px;
                                "
                              >
                                 
                              </div>
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                class="heading_block block-2"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td
                                    class="pad"
                                    style="
                                      padding-left: 10px;
                                      padding-right: 10px;
                                      text-align: center;
                                      width: 100%;
                                    "
                                  >
                                    <h1
                                      style="
                                        margin: 0;
                                        color: #010101;
                                        direction: ltr;
                                        font-family: Arial, Helvetica Neue,
                                          Helvetica, sans-serif;
                                        font-size: 34px;
                                        font-weight: normal;
                                        letter-spacing: normal;
                                        line-height: 120%;
                                        text-align: center;
                                        margin-top: 0;
                                        margin-bottom: 0;
                                        mso-line-height-alt: 40.8px;
                                      "
                                    >
                                      <strong>Order Summary</strong>
                                    </h1>
                                  </td>
                                </tr>
                              </table>
                              <div
                                class="spacer_block block-3"
                                style="
                                  height: 25px;
                                  line-height: 25px;
                                  font-size: 1px;
                                "
                              >
                                 
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
  
              <!-- Order no & date -->
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-5"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          color: #000000;
                          width: 680px;
                          margin: 0 auto;
                        "
                        width="680"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="41.666666666666664%"
                            >
                              <table
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                class="paragraph_block block-1"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  word-break: break-word;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td class="pad">
                                    <div
                                      style="
                                        color: #cc835c;
                                        font-family: Arial, Helvetica Neue,
                                          Helvetica, sans-serif;
                                        font-size: 16px;
                                        line-height: 150%;
                                        text-align: left;
                                        mso-line-height-alt: 24px;
                                      "
                                    >
                                      <p
                                        style="margin: 0; word-break: break-word"
                                      >
                                        
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td
                              class="column column-2"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="58.333333333333336%"
                            >
                              <table
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                class="paragraph_block block-1"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  word-break: break-word;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td class="pad">
                                    <div
                                      style="
                                        color: #cc835c;
                                        font-family: Arial, Helvetica Neue,
                                          Helvetica, sans-serif;
                                        font-size: 16px;
                                        line-height: 150%;
                                        text-align: right;
                                        mso-line-height-alt: 24px;
                                      "
                                    >
                                      <p
                                        style="margin: 0; word-break: break-word"
                                      >
                                        <span>${formattedDate}</span>
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- Order no & date -->
              
              <!-- Product card 3 -->
              ${products.map(
                (element) =>
                  `<table
      align="center"
      border="0"
      cellpadding="0"
      cellspacing="0"
      class="row row-10"
      role="presentation"
      style="
mso-table-lspace: 0pt;
mso-table-rspace: 0pt;
background-position: center top;
"
      width="100%"
    >
      <tbody>
        <tr>
          <td>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row-content stack"
              role="presentation"
              style="
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        background-color: #cfdddf;
        color: #000000;
        width: 680px;
        margin: 0 auto;
      "
              width="680"
            >
              <tbody>
                <tr>
                  <td
                    class="column column-1"
                    style="
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              font-weight: 400;
              text-align: left;
              background-color: #b2c1c3;
              padding-bottom: 5px;
              padding-top: 5px;
              vertical-align: top;
              border-top: 0px;
              border-right: 0px;
              border-bottom: 0px;
              border-left: 0px;
            "
                    width="25%"
                  >
                    <div
                      class="spacer_block block-1"
                      style="
                height: 20px;
                line-height: 20px;
                font-size: 1px;
              "
                    >
                       
                    </div>
                    <table
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="image_block block-2"
                      role="presentation"
                      style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
              "
                      width="100%"
                    >
                      <tr>
                        <td
                          class="pad"
                          style="
                    width: 100%;
                    padding-right: 0px;
                    padding-left: 0px;
                  "
                        >
                          <div
                            align="center"
                            class="alignment"
                            style="line-height: 10px"
                          >
                            <div class="fullWidth" style="max-width: 136px">
                              <img
                                alt="Skincare products"
                                src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5056/skincare_product.png"
                                style="
                          display: block;
                          height: auto;
                          border: 0;
                          width: 100%;
                        "
                                title="Skincare products"
                                width="136"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>
                    <div
                      class="spacer_block block-3"
                      style="
                height: 20px;
                line-height: 20px;
                font-size: 1px;
              "
                    >
                       
                    </div>
                  </td>
                  <td
                    class="column column-2"
                    style="
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              font-weight: 400;
              text-align: left;
              padding-bottom: 5px;
              padding-top: 5px;
              vertical-align: top;
              border-top: 0px;
              border-right: 0px;
              border-bottom: 0px;
              border-left: 0px;
            "
                    width="41.666666666666664%"
                  >
                    <div
                      class="spacer_block block-1"
                      style="
                height: 30px;
                line-height: 30px;
                font-size: 1px;
              "
                    >
                       
                    </div>
                    <table
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="heading_block block-2"
                      role="presentation"
                      style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
              "
                      width="100%"
                    >
                      <tr>
                        <td
                          class="pad"
                          style="
                    padding-bottom: 10px;
                    padding-left: 15px;
                    padding-right: 10px;
                    text-align: center;
                    width: 100%;
                  "
                        >
                          <h1
                            style="
                      margin: 0;
                      color: #010101;
                      direction: ltr;
                      font-family: Arial, Helvetica Neue,
                        Helvetica, sans-serif;
                      font-size: 24px;
                      font-weight: normal;
                      letter-spacing: normal;
                      line-height: 120%;
                      text-align: left;
                      margin-top: 0;
                      margin-bottom: 0;
                      mso-line-height-alt: 28.799999999999997px;
                    "
                          >
                            <strong>${element.name}</strong>
                          </h1>
                        </td>
                      </tr>
                    </table>
                    <table
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="paragraph_block block-3"
                      role="presentation"
                      style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                word-break: break-word;
              "
                      width="100%"
                    >
                      <tr>
                        <td
                          class="pad"
                          style="
                    padding-bottom: 10px;
                    padding-left: 15px;
                    padding-right: 10px;
                    padding-top: 10px;
                  "
                        >
                          <div
                            style="
                      color: #393d47;
                      font-family: Arial, Helvetica Neue,
                        Helvetica, sans-serif;
                      font-size: 14px;
                      line-height: 150%;
                      text-align: left;
                      mso-line-height-alt: 21px;
                    "
                          >
                            <p style="margin: 0; word-break: break-word">
                              Lorem ipsum dolor sit amet, consectetuer
                              adipiscing elit.
                            </p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td
                    class="column column-3"
                    style="
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              font-weight: 400;
              text-align: left;
              padding-bottom: 5px;
              padding-top: 5px;
              vertical-align: top;
              border-top: 0px;
              border-right: 0px;
              border-bottom: 0px;
              border-left: 0px;
            "
                    width="16.666666666666668%"
                  >
                    <div
                      class="spacer_block block-1"
                      style="
                height: 0px;
                line-height: 0px;
                font-size: 1px;
              "
                    >
                       
                    </div>
                  </td>
                  <td
                    class="column column-4"
                    style="
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              font-weight: 400;
              text-align: left;
              padding-bottom: 5px;
              padding-top: 5px;
              vertical-align: top;
              border-top: 0px;
              border-right: 0px;
              border-bottom: 0px;
              border-left: 0px;
            "
                    width="16.666666666666668%"
                  >
                    <div
                      class="spacer_block block-1"
                      style="
                height: 35px;
                line-height: 35px;
                font-size: 1px;
              "
                    >
                       
                    </div>
                    <table
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="heading_block block-2"
                      role="presentation"
                      style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
              "
                      width="100%"
                    >
                      <tr>
                        <td
                          class="pad"
                          style="
                    padding-bottom: 15px;
                    padding-left: 10px;
                    padding-right: 10px;
                    text-align: center;
                    width: 100%;
                  "
                        >
                          <h1
                            style="
                      margin: 0;
                      color: #010101;
                      direction: ltr;
                      font-family: Arial, Helvetica Neue,
                        Helvetica, sans-serif;
                      font-size: 18px;
                      font-weight: normal;
                      letter-spacing: normal;
                      line-height: 120%;
                      text-align: left;
                      margin-top: 0;
                      margin-bottom: 0;
                      mso-line-height-alt: 21.599999999999998px;
                    "
                          >
                            <strong>${element.price}</strong>
                          </h1>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>`
              )}
              <!-- Product card 3 -->
              
  
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-12"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          color: #000000;
                          width: 680px;
                          margin: 0 auto;
                        "
                        width="680"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="41.666666666666664%"
                            >
                              <table
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                class="paragraph_block block-1"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  word-break: break-word;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td class="pad">
                                    <div
                                      style="
                                        color: #cc835c;
                                        font-family: Arial, Helvetica Neue,
                                          Helvetica, sans-serif;
                                        font-size: 16px;
                                        line-height: 150%;
                                        text-align: left;
                                        mso-line-height-alt: 24px;
                                      "
                                    >
                                      <p
                                        style="margin: 0; word-break: break-word"
                                      >
                                        <strong
                                          ><span>Order Summary</span></strong
                                        >
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td
                              class="column column-2"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="58.333333333333336%"
                            >
                              <div
                                class="spacer_block block-1"
                                style="
                                  height: 0px;
                                  line-height: 0px;
                                  font-size: 1px;
                                "
                              >
                                 
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-13"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          color: #000000;
                          width: 680px;
                          margin: 0 auto;
                        "
                        width="680"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-top: 5px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="41.666666666666664%"
                            >
                              <table
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                class="paragraph_block block-1"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  word-break: break-word;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td class="pad">
                                    <div
                                      style="
                                        color: #010101;
                                        font-family: Arial, Helvetica Neue,
                                          Helvetica, sans-serif;
                                        font-size: 16px;
                                        line-height: 150%;
                                        text-align: left;
                                        mso-line-height-alt: 24px;
                                      "
                                    >
                                      <p
                                        style="margin: 0; word-break: break-word"
                                      >
                                        <span>Sub total</span>
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td
                              class="column column-2"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-top: 5px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="58.333333333333336%"
                            >
                              <table
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                class="paragraph_block block-1"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  word-break: break-word;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td class="pad">
                                    <div
                                      style="
                                        color: #010101;
                                        font-family: Arial, Helvetica Neue,
                                          Helvetica, sans-serif;
                                        font-size: 16px;
                                        line-height: 150%;
                                        text-align: right;
                                        mso-line-height-alt: 24px;
                                      "
                                    >
                                      <p
                                        style="margin: 0; word-break: break-word"
                                      >
                                        <span>$${calculateTotalPrice()}</span>
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-14"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          color: #000000;
                          width: 680px;
                          margin: 0 auto;
                        "
                        width="680"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="100%"
                            >
                              <table
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                class="divider_block block-1"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td class="pad">
                                    <div align="center" class="alignment">
                                      <table
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                        "
                                        width="100%"
                                      >
                                        <tr>
                                          <td
                                            class="divider_inner"
                                            style="
                                              font-size: 1px;
                                              line-height: 1px;
                                              border-top: 1px solid #bbbbbb;
                                            "
                                          >
                                            <span> </span>
                                          </td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-15"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          color: #000000;
                          width: 680px;
                          margin: 0 auto;
                        "
                        width="680"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="41.666666666666664%"
                            >
                              <table
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                class="paragraph_block block-1"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  word-break: break-word;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td class="pad">
                                    <div
                                      style="
                                        color: #010101;
                                        font-family: Arial, Helvetica Neue,
                                          Helvetica, sans-serif;
                                        font-size: 16px;
                                        line-height: 150%;
                                        text-align: left;
                                        mso-line-height-alt: 24px;
                                      "
                                    >
                                      <p
                                        style="margin: 0; word-break: break-word"
                                      >
                                        <span>Tax</span>
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td
                              class="column column-2"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="58.333333333333336%"
                            >
                              <table
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                class="paragraph_block block-1"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  word-break: break-word;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td class="pad">
                                    <div
                                      style="
                                        color: #010101;
                                        font-family: Arial, Helvetica Neue,
                                          Helvetica, sans-serif;
                                        font-size: 16px;
                                        line-height: 150%;
                                        text-align: right;
                                        mso-line-height-alt: 24px;
                                      "
                                    >
                                      <p
                                        style="margin: 0; word-break: break-word"
                                      >
                                        <span>$${tax}</span>
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-16"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          color: #000000;
                          width: 680px;
                          margin: 0 auto;
                        "
                        width="680"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="100%"
                            >
                              <table
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                class="divider_block block-1"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td class="pad">
                                    <div align="center" class="alignment">
                                      <table
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                        "
                                        width="100%"
                                      >
                                        <tr>
                                          <td
                                            class="divider_inner"
                                            style="
                                              font-size: 1px;
                                              line-height: 1px;
                                              border-top: 1px solid #bbbbbb;
                                            "
                                          >
                                            <span> </span>
                                          </td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-17"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          color: #000000;
                          width: 680px;
                          margin: 0 auto;
                        "
                        width="680"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="41.666666666666664%"
                            >
                              <table
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                class="paragraph_block block-1"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  word-break: break-word;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td class="pad">
                                    <div
                                      style="
                                        color: #010101;
                                        font-family: Arial, Helvetica Neue,
                                          Helvetica, sans-serif;
                                        font-size: 16px;
                                        line-height: 150%;
                                        text-align: left;
                                        mso-line-height-alt: 24px;
                                      "
                                    >
                                      <p
                                        style="margin: 0; word-break: break-word"
                                      >
                                        <span>Shipping</span>
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td
                              class="column column-2"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="58.333333333333336%"
                            >
                              <table
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                class="paragraph_block block-1"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  word-break: break-word;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td class="pad">
                                    <div
                                      style="
                                        color: #010101;
                                        font-family: Arial, Helvetica Neue,
                                          Helvetica, sans-serif;
                                        font-size: 16px;
                                        line-height: 150%;
                                        text-align: right;
                                        mso-line-height-alt: 24px;
                                      "
                                    >
                                      <p
                                        style="margin: 0; word-break: break-word"
                                      >
                                        <span>$${shipping}</span>
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-18"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          color: #000000;
                          width: 680px;
                          margin: 0 auto;
                        "
                        width="680"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="41.666666666666664%"
                            >
                              <div
                                class="spacer_block block-1"
                                style="
                                  height: 0px;
                                  line-height: 0px;
                                  font-size: 1px;
                                "
                              >
                                 
                              </div>
                            </td>
                            <td
                              class="column column-2"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="16.666666666666668%"
                            >
                              <div
                                class="spacer_block block-1"
                                style="
                                  height: 0px;
                                  line-height: 0px;
                                  font-size: 1px;
                                "
                              >
                                 
                              </div>
                            </td>
                            <td
                              class="column column-3"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="16.666666666666668%"
                            >
                              <table
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                class="paragraph_block block-1"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  word-break: break-word;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td class="pad">
                                    <div
                                      style="
                                        color: #010101;
                                        font-family: Arial, Helvetica Neue,
                                          Helvetica, sans-serif;
                                        font-size: 16px;
                                        line-height: 150%;
                                        text-align: right;
                                        mso-line-height-alt: 24px;
                                      "
                                    >
                                      <p
                                        style="margin: 0; word-break: break-word"
                                      >
                                        <strong><span>Total</span></strong>
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td
                              class="column column-4"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="25%"
                            >
                              <table
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                class="paragraph_block block-1"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  word-break: break-word;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td class="pad">
                                    <div
                                      style="
                                        color: #010101;
                                        font-family: Arial, Helvetica Neue,
                                          Helvetica, sans-serif;
                                        font-size: 16px;
                                        line-height: 150%;
                                        text-align: right;
                                        mso-line-height-alt: 24px;
                                      "
                                    >
                                      <p
                                        style="margin: 0; word-break: break-word"
                                      >
                                        <strong><span>$${totalPriceAfterTaxes()}</span></strong>
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- End -->
    </body>
  </html>
  `;
};

// const html = htmlToSend()

module.exports = { htmlToSend };
