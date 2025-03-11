export default function StatusButtonGroup({
  status,
  statusList,
  setStatus,
  statusCount,
}) {
  return (
    <>
      <div className="btn-gruop bg-light-gray d-inline-flex p-1 rounded-5 mb-lg-12 mb-6 gap-2">
        {statusList?.map((option) => {
          return (
            <button
              key={option.key}
              type="button"
              className={`btn btn-white
                      ${status === option.key ? 'active' : ''}
                      ${statusCount[option.key] === 0 ? 'disabled' : ''}
                    `}
              onClick={() => {
                setStatus(option.key);
              }}
            >
              {`${option.label} (${statusCount[option.key] || 0})`}
            </button>
          );
        })}
      </div>
    </>
  );
}
