//@ts-nocheck
const SizeConversionStep = () => {
  const showModel = () => {

  }
  const clothingSizeRecommendations = {
    shirt: 'M',
    pants: '32',
    dress: 'S',
    bra: '34C',
    shoes: "UK 5"
  };

  const sizeConversions = {
    "USA": {
      shirt: 'M',
      pants: '32',
      dress: 'S',
      bra: '34C',
      shoes: 'US 8'
    },
    "UK": {
      shirt: 'M',
      pants: '32',
      dress: 'S',
      bra: '34C',
      shoes: 'UK 6'
    },
    "EU": {
      shirt: 'M',
      pants: '32',
      dress: 'S',
      bra: '75C',
      shoes: 'EU 38'
    },
    // Add more size conversions for different countries and categories as needed
  };

  const displaySizeConversionTable = () => {
    const countries = Object.keys(sizeConversions);

    return (
      <table>
        <thead>
          <tr>
            <th>Country</th>
            {Object.keys(clothingSizeRecommendations).map(category => (
              <th key={category}>{category}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {countries.map(country => (
            <tr key={country}>
              <td>{country}</td>
              {Object.keys(clothingSizeRecommendations).map(category => (
                <td key={category}>{sizeConversions[country][category]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div id="step-4" className="step step5 tab-pane" role="tabpanel" aria-labelledby="step-4">
      <h1 className="text-3xl mt-3" >Size Conversions</h1>
      <p className="mt-3 mb-2">
        See the size conversions below to easily find the right size across different regions and brands:
      </p>

      <div className="mb-3" >
        <div className="col-md-6 text-center mb-3">
          <button
            onClick={showModel}
            id="need-help-icon"
            className="bi bi-question-circle-fill"
            style={{ fontSize: "24px", cursor: "pointer" }}
            data-bs-toggle="modal"
            data-bs-target="#helpModal"
          >
            Need Help
          </button>
        </div>
        <div id="size-conversion-table">
          {displaySizeConversionTable()}
        </div>
      </div>

      {/* <div className="modal fade" id="helpModal" tabIndex="-1" aria-labelledby="helpModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="helpModalLabel">Size Chart Images</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex justify-content-center">
              <img src="../images/image2.png" alt="Image 1" className="img-fluid" style={{ maxHeight: '70vh' }} />
              <img src="../images/image3.png" alt="Image 2" className="img-fluid" style={{ maxHeight: '70vh' }} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SizeConversionStep;
