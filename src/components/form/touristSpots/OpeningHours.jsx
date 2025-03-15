import { Modal } from 'bootstrap';
import { useEffect, useRef, useState } from 'react';

export default function OpeningHours({ register, watch, setValue }) {
  //   處理Modal
  const OpenTimeRef = useRef(null);
  useEffect(() => {
    new Modal(OpenTimeRef.current, {
      backdrop: 'static',
    });
  }, []);
  //   modal-backdrop fade show
  const handleOpenModalOpenTime = () => {
    const modalInstance = Modal.getInstance(OpenTimeRef.current);
    modalInstance.show();
  };

  const handleCloseModalOpenTime = () => {
    const modalInstance = Modal.getInstance(OpenTimeRef.current);
    modalInstance.hide();
  };

  const copyTimeRef = useRef(null);
  useEffect(() => {
    new Modal(copyTimeRef.current);
  }, []);

  const handleOpenModalCopyTime = () => {
    const modalInstance = Modal.getInstance(copyTimeRef.current);
    modalInstance.show();
    setTimeout(() => {
      handleCloseModalOpenTime();
    }, 300); // 這裡的 300ms 讓動畫完成後再開啟新的 Modal
  };

  const handleCloseModalCopyTime = () => {
    const modalInstance = Modal.getInstance(copyTimeRef.current);
    modalInstance.hide();
    setTimeout(() => {
      handleOpenModalOpenTime();
    }, 300); // 這裡的 300ms 讓動畫完成後再開啟新的 Modal
  };

  const [openingHours, setOpeningHours] = useState({
    星期一: [],
    星期二: [],
    星期三: [],
    星期四: [],
    星期五: [],
    星期六: [],
    星期日: [],
  });
  const [backupOpeningHours, setBackupOpeningHours] = useState({});
  const [backupWatchTimeOptions, setBackupWatchTimeOptions] = useState([]);

  //   { startTime: '', endTime: '' }

  const watchTimeOptions = watch('timeOptions', []);
  const watchBusinessHours = watch('businessHours', {});

  const handleOpenTimeBtn = () => {
    handleOpenModalOpenTime();

    if (Object.keys(watchBusinessHours).length > 0) {
      setBackupOpeningHours(watchBusinessHours);
      setOpeningHours(watchBusinessHours);
      // 收集所有應該加入的 weekday
      const newTimeOptions = Object.keys(watchBusinessHours).filter(
        (weekday) => watchBusinessHours[weekday].length > 0
      );
      setValue('timeOptions', [...newTimeOptions]);
      setBackupWatchTimeOptions(newTimeOptions);
    } else {
      // 先備份目前的 openingHours
      setBackupOpeningHours(openingHours);
      setBackupWatchTimeOptions(watchTimeOptions);
    }
  };

  useEffect(() => {
    setOpeningHours((prev) => {
      // 如果沒有選擇任何星期，則清空所有時間
      if (!Array.isArray(watchTimeOptions) || watchTimeOptions.length === 0) {
        return Object.keys(prev).reduce((acc, weekday) => {
          acc[weekday] = [];
          return acc;
        }, {});
      }

      const updataOpeningHours = { ...prev };

      Object.keys(updataOpeningHours).forEach((weekday) => {
        // 檢查該星期是否在選擇的時間選項中
        if (watchTimeOptions.includes(weekday)) {
          if (updataOpeningHours[weekday].length === 0) {
            // 原本有時間資料的，抓取之前的資料在新增
            updataOpeningHours[weekday] = [
              ...prev[weekday],
              { startTime: '', endTime: '', id: Date.now() },
            ];
          } else {
            // 沒有時間資料的，新增保留原本資料
            updataOpeningHours[weekday] = [...prev[weekday]];
          }
        } else {
          // 沒有選取的 時間陣列為空間列
          updataOpeningHours[weekday] = [];
        }
      });
      return updataOpeningHours;
    });
  }, [watchTimeOptions]);

  const handleAddTimeSlots = (weekday) => {
    setOpeningHours((prev) => {
      return {
        ...prev,
        [weekday]: [
          ...prev[weekday],
          { startTime: '', endTime: '', id: Date.now() },
        ],
      };
    });
  };

  const handleStartTime = (weekday, timeIndex, newStartTime) => {
    setOpeningHours((prev) => {
      const updataWeekdaySlots = [...prev[weekday]];
      updataWeekdaySlots[timeIndex] = {
        ...updataWeekdaySlots[timeIndex],
        startTime: newStartTime,
      };
      return {
        ...prev,
        [weekday]: updataWeekdaySlots,
      };
    });
  };

  const handleEndTime = (weekday, timeIndex, newEndTime) => {
    setOpeningHours((prev) => {
      const updatedWeekdaySlots = [...prev[weekday]];
      updatedWeekdaySlots[timeIndex] = {
        ...updatedWeekdaySlots[timeIndex],
        endTime: newEndTime,
      };
      return {
        ...prev,
        [weekday]: updatedWeekdaySlots,
      };
    });
  };

  const handleDelTimeSlots = (weekday, timeId) => {
    setOpeningHours((prev) => {
      const updatedWeekdaySlots = prev[weekday].filter(
        (time) => time.id !== timeId
      );
      const newOpeningHours = { ...prev, [weekday]: updatedWeekdaySlots };

      // 如果該 weekday 的時段全部刪除，則從 timeOptions 內移除該 weekday
      if (updatedWeekdaySlots.length === 0) {
        setValue(
          'timeOptions',
          watchTimeOptions.filter((day) => day !== weekday)
        );
      }

      return newOpeningHours;
    });
  };

  const handleSubmitOpenTimeBtn = () => {
    const allTimesValid = Object.values(openingHours).every((weekdayTimes) => {
      return weekdayTimes.every((timeData) => {
        return timeData.startTime !== '' && timeData.endTime !== '';
      });
    });
    if (allTimesValid) {
      setValue('businessHours', openingHours);
      setBackupOpeningHours(openingHours);
      handleCloseModalOpenTime();
    } else {
      alert('請填寫所有開始時間和結束時間，不可為空');
    }
  };

  //取消按鈕
  const handleCancelOpenTimeBtn = () => {
    setOpeningHours(backupOpeningHours);
    setValue('timeOptions', backupWatchTimeOptions);
    handleCloseModalOpenTime();
  };

  const handleCopyTimeBtn = (weekday) => {
    const allTimesValid = openingHours[weekday].every((timeData) => {
      return timeData.startTime !== '' && timeData.endTime !== '';
    });
    if (allTimesValid) {
      setCopyWeekday(weekday);
      handleOpenModalCopyTime();
    } else {
      alert('請填寫開始時間和結束時間，不可為空');
    }
  };

  const [copyWeekday, setCopyWeekday] = useState('');
  const [selectedWeekdays, setSelectedWeekdays] = useState([]);

  const handleSelectedCopyWeekday = (value) => {
    setSelectedWeekdays((prev) =>
      prev.includes(value)
        ? prev.filter((day) => day !== value)
        : [...prev, value]
    );
  };

  const handleCheckedCopy = (copyWeekday, selectedWeekdays) => {
    setOpeningHours((prev) => {
      const updatedOpeningHours = { ...prev };

      selectedWeekdays.forEach((day) => {
        if (day in updatedOpeningHours) {
          updatedOpeningHours[day] = [...prev[copyWeekday]];
        }
      });
      return updatedOpeningHours;
    });
    // 更新 watchTimeOptions，确保所有复制的 weekday 都被加入
    setValue('timeOptions', [...watchTimeOptions, ...selectedWeekdays]);
    setCopyWeekday('');
    setSelectedWeekdays([]);
  };

  return (
    <>
      <div className="row mb-4">
        <label htmlFor="inputOpenTime" className="col-md-2 col-form-label">
          營業時間<span className="text-danger">*</span>
        </label>
        <input
          type="hidden"
          name="businessHours"
          {...register('businessHours')}
        />

        <div className="col-md-10">
          {watchBusinessHours && (
            <ul className="list-unstyled">
              {Object.keys(watchBusinessHours).map((weekday, index) => {
                return (
                  <li key={index} className="mb-2 d-flex gap-2">
                    <div className="row">
                      <div className="col-auto">
                        <span>{weekday}</span>
                      </div>
                      <div className="col">
                        {watchBusinessHours[weekday]?.length === 0 ? (
                          '未營業'
                        ) : (
                          <ul className="list-unstyled">
                            {watchBusinessHours[weekday].map((time, index) => {
                              return (
                                <li key={index}>
                                  {time.startTime}-{time.endTime}
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}

          <button
            type="button"
            className="btn btn-primary w-100 d-flex justify-content-center rounded-1"
            onClick={() => {
              handleOpenTimeBtn();
            }}
          >
            修改營業時間
            <span className="iconify-mingcute--time-fill" />
          </button>

          <div
            ref={OpenTimeRef}
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    營業時間
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleCancelOpenTimeBtn}
                  ></button>
                </div>
                <div className="modal-body">
                  {/* <b className="text-danger">備份：backupOpeningHours</b>:
                  {JSON.stringify(backupOpeningHours)} <hr />
                  <b className="text-danger">watchBusinessHours</b>:
                  {JSON.stringify(watchBusinessHours)} <hr />
                  <b className="text-danger">watchTimeOptions</b>:
                  {JSON.stringify(watchTimeOptions)} <hr />
                  <b className="text-danger">openingHours</b>:
                  {JSON.stringify(openingHours)} */}
                  <ul className="list-group list-group-flush">
                    {Object.keys(openingHours).map((weekday, index) => (
                      <li
                        key={index}
                        className="list-group-item d-lg-flex d-column gap-4 px-0 py-3 align-items-center"
                      >
                        {/* 星期選擇 */}
                        <div className="form-check ms-0">
                          <input
                            {...register('timeOptions')}
                            name="timeOptions"
                            type="checkbox"
                            id={`timeOptions-${index}`}
                            className="btn-check"
                            value={weekday}
                          />
                          <label
                            className="btn btn-outline-primary"
                            htmlFor={`timeOptions-${index}`}
                          >
                            {weekday}
                            <span className="material-symbols-outlined">
                              {watchTimeOptions &&
                              watchTimeOptions?.includes(weekday)
                                ? 'check_circle'
                                : 'add_circle'}
                            </span>
                          </label>
                        </div>

                        {/* 當日營業時間社設定 */}
                        {openingHours[weekday]?.length === 0 ? (
                          '未營業'
                        ) : (
                          <>
                            <ul className="flex-column form-select-time list-unstyled d-flex gap-4 justify-content-center">
                              {openingHours[weekday].map((time, timeIndex) => {
                                return (
                                  <li key={timeIndex} className="d-flex gap-3">
                                    <div className="time-group d-flex align-items-center gap-2">
                                      <input
                                        type="time"
                                        className="form-control"
                                        value={time.startTime}
                                        required
                                        onChange={(e) => {
                                          handleStartTime(
                                            weekday,
                                            timeIndex,
                                            e.target.value
                                          );
                                        }}
                                      />
                                      至
                                      <input
                                        type="time"
                                        className="form-control"
                                        value={time.endTime}
                                        required
                                        onChange={(e) => {
                                          handleEndTime(
                                            weekday,
                                            timeIndex,
                                            e.target.value
                                          );
                                        }}
                                      />
                                    </div>
                                    <div className="btn-group gap-2">
                                      <button
                                        className="btn btn-normal-gray p-2 rounded-1 "
                                        type="button"
                                        onClick={() => {
                                          handleDelTimeSlots(weekday, time.id);
                                        }}
                                      >
                                        <span className="material-symbols-outlined">
                                          delete
                                        </span>
                                      </button>
                                      {openingHours[weekday].length ===
                                        timeIndex + 1 && (
                                        <button
                                          className="btn btn-normal-gray p-2 rounded-1 "
                                          type="button"
                                          onClick={() => {
                                            handleAddTimeSlots(weekday);
                                          }}
                                        >
                                          <span className="material-symbols-outlined">
                                            add
                                          </span>
                                        </button>
                                      )}
                                    </div>
                                  </li>
                                );
                              })}
                            </ul>
                            <div className="ms-auto">
                              <button
                                className="btn p-0"
                                type="button"
                                onClick={() => {
                                  handleCopyTimeBtn(weekday);
                                }}
                              >
                                複製時段
                                <span className="material-symbols-outlined">
                                  content_copy
                                </span>
                              </button>
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCancelOpenTimeBtn}
                  >
                    取消
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSubmitOpenTimeBtn}
                  >
                    確定
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={copyTimeRef}
            className="modal fade"
            id="setTime"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    複製時段
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => {
                      handleCloseModalCopyTime();
                      setCopyWeekday('');
                      setSelectedWeekdays([]);
                    }}
                  ></button>
                </div>
                {/* selectedWeekdays要複製的weekday
                {JSON.stringify(selectedWeekdays)} */}
                {copyWeekday && (
                  <div className="modal-body">
                    <div className="text-center py-5">
                      <h6 className="mb-3">
                        複製<b> {copyWeekday} </b>營業時段
                      </h6>
                      {openingHours[copyWeekday].map((time, index) => {
                        return (
                          <p key={index}>
                            {time.startTime} - {time.endTime}
                          </p>
                        );
                      })}
                    </div>
                    <ul className="list-unstyled d-flex justify-content-between">
                      {Object.keys(openingHours)?.map((weekday, index) => {
                        return (
                          <li key={index}>
                            <input
                              name="copyWeekday"
                              type="checkbox"
                              className="btn-check"
                              id={`copyWeekday-${index}`}
                              disabled={weekday === copyWeekday}
                              value={weekday}
                              onChange={(e) => {
                                handleSelectedCopyWeekday(e.target.value);
                              }}
                            />
                            <label
                              className="btn btn-outline-primary px-2 py-2"
                              htmlFor={`copyWeekday-${index}`}
                            >
                              {weekday}
                              <span className="material-symbols-outlined">
                                {/* add_circle */}
                                {/* check_circle */}
                                {weekday === copyWeekday ||
                                selectedWeekdays.includes(weekday)
                                  ? 'check_circle'
                                  : 'add_circle'}
                              </span>
                            </label>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      handleCloseModalCopyTime();
                      setCopyWeekday('');
                      setSelectedWeekdays([]);
                    }}
                  >
                    取消
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      handleCloseModalCopyTime();
                      handleCheckedCopy(copyWeekday, selectedWeekdays);
                    }}
                  >
                    複製
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
