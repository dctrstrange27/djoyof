const SendProof = ({ proofView, setProofView, setProofFile }) => {
  return (
    <div
      className="bg-[#161616] p-8 rounded-md filter shadow-2xl border border-neutral-800 "
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <p className="my-2 text-lg text-white">Send Proof</p>
      <div className="m-12 flex flex-col items-center">
        {!proofView ? (
          <>
            <p className="text-xs text-gray-500 mb-8">
              Please upload a proof of payment (screenshot)
            </p>
            <label className="block">
              <input
                accept="image/png, image/gif, image/jpeg"
                onChange={(e) => {
                  setProofFile(e.target.files[0]);
                  setProofView(URL.createObjectURL(e.target.files[0]));
                }}
                type="file"
                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-neutral-800 file:text-neutral-400 hover:file:bg-neutral-700 hover:cursor-pointer"
              />
            </label>
          </>
        ) : (
          <img className="" src={proofView} alt="proof"></img>
        )}
      </div>
      {proofView && (
        <button
          onClick={() => {
            setProofFile(null);
            setProofView(null);
          }}
          className={`$ px-4 py-2 bg-amber-200 text-neutral-800 rounded-md`}
        >
          Replace Proof
        </button>
      )}
      <button
        disabled={!proofView}
        className={`${
          !proofView && "cursor-not-allowed"
        } px-4 py-2 bg-amber-200 text-neutral-800 rounded-md`}
      >
        Send
      </button>
    </div>
  );
};

export default SendProof;
