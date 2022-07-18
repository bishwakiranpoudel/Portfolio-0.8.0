import React from 'react'
import { Component } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Pindetail(number) {
  const one={name:"hellow"};
  const two={name:"h"};
  var t;
  if(number ==1){
    t=one;

  }
  else{
    t=two;
  }
  return (
    <motion.div className="pin-page">
    <motion.div initial={{ display: 'block', zIndex: 1000 }} animate={{
      zIndex: 0, y: 0, transitionEnd: {
        display: "none",
      },
    }} transition={{ duration: 1 }}>
      <div className="pin" >
        <motion.div className="pin-box" initial={{ scale: 1, x: -100 }} animate={{ scale: 8, x: 10, y: 200 }} transition={{ duration: 0.5 }}>
          <motion.img src={require("../static/pinup-icon-min.webp")} alt="" animate={{ scale: 0.1, x: 17 }} transition={{ duration: 0.5 }} />
        </motion.div>


      </div>
    </motion.div>
    <motion.div initial={{ display: "none" }} animate={{
      opacity: 1, transitionEnd: {
        display: "block",
      },
    }} transition={{ duration: 1 }}>
      <div className="pin-header">
      <div class="star-pin"><img classname="alpha"src={require("../static/pinup-icon-min.webp")} alt="" /></div>
      <svg width="401" height="151" viewBox="0 0 401 151" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="pin" clip-path="url(#clip0_4_177)">
          <rect width="401" height="151" fill="none" />
          <g id="Vector">
            <path id="to" d="M-3 98.801L52.5306 105.25L60.6819 82.3301L33.6808 86.3058L52.5306 45.4126L18.3971 51.0922L40.8131 8.49515L5.66073 13.0388L9.73637 -2.86408H111.118L103.986 5.65534L80.5506 48.2524L111.118 41.4369L90.2303 81.1942L118.25 75.5146L107.552 98.233L175.819 105.7L183.97 82.3301L156.969 86.3058L175.819 45.4126L141.685 51.0922L164.101 8.49515L128.949 13.0388L133.024 -2.86408H234.406L227.274 5.65534L203.839 48.2524L234.406 41.4369L213.518 81.1942L241.538 75.5146L231.859 98.801L278.729 104.633L286.88 81.1942L259.879 85.1699L278.729 44.2767L244.595 49.9563L267.011 7.35922L231.859 11.9029L235.789 -3.43204H-3V98.801Z" fill="#1E51E6" />
            <path id="to" d="M335.278 98.801L388.266 105.037L397.432 81.1942L370.43 85.1699L389.28 44.2767L355.147 49.9563L377.563 7.35922L342.41 11.9029L346.341 -3.43204H336.84L330.184 4.51942L306.749 47.1165L337.316 40.301L316.428 80.0583L344.448 74.3786L335.278 98.801Z" fill="#1E51E6" />
            <path id="on" d="M278.729 104.633L345.977 113L335.278 98.801L344.448 74.3786L316.428 80.0583L337.316 40.301L306.749 47.1165L330.184 4.51942L336.84 -3.43204H235.789L231.859 11.9029L267.011 7.35922L244.595 49.9563L278.729 44.2767L259.879 85.1699L286.88 81.1942L278.729 104.633Z" fill="#FBC8DE" />
            <path id="on" d="M411.187 107.735V-3.43204H346.341L342.41 11.9029L377.563 7.35922L355.147 49.9563L389.28 44.2767L370.43 85.1699L397.432 81.1942L388.266 105.037L411.187 107.735Z" fill="#FBC8DE" />
            <path id="on" d="M175.819 105.7L242.557 113L231.859 98.801L241.538 75.5146L213.518 81.1942L234.406 41.4369L203.839 48.2524L227.274 5.65534L234.406 -2.86408H133.024L128.949 13.0388L164.101 8.49515L141.685 51.0922L175.819 45.4126L156.969 86.3058L183.97 82.3301L175.819 105.7Z" fill="#FBC8DE" />
            <path id="on" d="M52.5306 105.25L119.269 113L107.552 98.233L118.25 75.5146L90.2303 81.1942L111.118 41.4369L80.5506 48.2524L103.986 5.65534L111.118 -2.86408H9.73637L5.66073 13.0388L40.8131 8.49515L18.3971 51.0922L52.5306 45.4126L33.6808 86.3058L60.6819 82.3301L52.5306 105.25Z" fill="#FBC8DE" />
            <path d="M-3 98.801H-5.5V101.027L-3.28839 101.284L-3 98.801ZM119.269 113L118.981 115.483L124.984 116.18L121.228 111.446L119.269 113ZM107.552 98.233L105.29 97.1679L104.629 98.5716L105.593 99.787L107.552 98.233ZM242.557 113L242.285 115.485L248.034 116.114L244.554 111.496L242.557 113ZM231.859 98.801L229.55 97.8414L229.001 99.1626L229.862 100.305L231.859 98.801ZM345.977 113L345.668 115.481L351.525 116.21L347.973 111.496L345.977 113ZM335.278 98.801L332.938 97.9222L332.455 99.2082L333.281 100.305L335.278 98.801ZM411.187 107.735L410.895 110.218L413.687 110.546V107.735H411.187ZM411.187 -3.43204H413.687V-5.93204H411.187V-3.43204ZM-3 -3.43204V-5.93204H-5.5V-3.43204H-3ZM133.024 -2.86408V-5.36408H131.084L130.603 -3.48473L133.024 -2.86408ZM128.949 13.0388L126.527 12.4182L125.611 15.991L129.269 15.5182L128.949 13.0388ZM164.101 8.49515L166.314 9.65937L168.556 5.39857L163.781 6.01577L164.101 8.49515ZM141.685 51.0922L139.473 49.928L137.127 54.385L142.096 53.5583L141.685 51.0922ZM175.819 45.4126L178.089 46.4592L180.065 42.1716L175.408 42.9465L175.819 45.4126ZM156.969 86.3058L154.698 85.2593L152.766 89.4516L157.333 88.7792L156.969 86.3058ZM183.97 82.3301L186.331 83.1534L187.69 79.2554L183.606 79.8568L183.97 82.3301ZM175.819 105.7L175.547 108.185L175.547 108.185L175.819 105.7ZM241.538 75.5146L243.847 76.4742L245.653 72.1297L241.042 73.0644L241.538 75.5146ZM213.518 81.1942L211.305 80.0314L208.858 84.6897L214.015 83.6443L213.518 81.1942ZM234.406 41.4369L236.619 42.5996L239.129 37.8224L233.862 38.9968L234.406 41.4369ZM203.839 48.2524L201.648 47.0474L198.98 51.8971L204.383 50.6925L203.839 48.2524ZM227.274 5.65534L225.357 4.05052L225.201 4.23709L225.083 4.45028L227.274 5.65534ZM234.406 -2.86408L236.323 -1.25926L239.759 -5.36408H234.406V-2.86408ZM235.934 -4V-6.5H233.994L233.513 -4.62063L235.934 -4ZM231.859 11.9029L229.437 11.2823L228.521 14.8551L232.179 14.3823L231.859 11.9029ZM267.011 7.35922L269.224 8.52345L271.466 4.26264L266.691 4.87985L267.011 7.35922ZM244.595 49.9563L242.383 48.7921L240.037 53.2491L245.005 52.4224L244.595 49.9563ZM278.729 44.2767L280.999 45.3232L282.975 41.0357L278.318 41.8106L278.729 44.2767ZM259.879 85.1699L257.608 84.1234L255.676 88.3157L260.243 87.6432L259.879 85.1699ZM286.88 81.1942L289.241 82.0154L290.596 78.1201L286.516 78.7208L286.88 81.1942ZM344.448 74.3786L346.789 75.2574L348.375 71.0318L343.952 71.9285L344.448 74.3786ZM316.428 80.0583L314.215 78.8955L311.768 83.5538L316.925 82.5084L316.428 80.0583ZM337.316 40.301L339.529 41.4637L342.039 36.6865L336.772 37.8609L337.316 40.301ZM306.749 47.1165L304.558 45.9114L301.89 50.7612L307.293 49.5566L306.749 47.1165ZM330.184 4.51942L328.267 2.9146L328.11 3.10117L327.993 3.31436L330.184 4.51942ZM337.316 -4L339.233 -2.39516L342.669 -6.5H337.316V-4ZM346.486 -4V-6.5H344.546L344.064 -4.62063L346.486 -4ZM342.41 11.9029L339.989 11.2823L339.073 14.8551L342.731 14.3823L342.41 11.9029ZM377.563 7.35922L379.775 8.52345L382.017 4.26264L377.242 4.87985L377.563 7.35922ZM355.147 49.9563L352.934 48.7921L350.589 53.2491L355.557 52.4224L355.147 49.9563ZM389.28 44.2767L391.551 45.3232L393.527 41.0357L388.87 41.8106L389.28 44.2767ZM370.43 85.1699L368.16 84.1234L366.228 88.3157L370.795 87.6432L370.43 85.1699ZM397.432 81.1942L399.765 82.0912L401.3 78.0976L397.067 78.7208L397.432 81.1942ZM388.261 105.049L385.927 104.153L384.777 107.151L387.966 107.531L388.261 105.049ZM455 113L454.704 115.482L460.24 116.142L457.05 111.57L455 113ZM444.301 97.665L442.03 96.6213L441.432 97.9218L442.251 99.0955L444.301 97.665ZM455 74.3786L457.272 75.4223L459.326 70.9509L454.503 71.9285L455 74.3786ZM426.98 80.0583L424.767 78.8955L422.319 83.5538L427.477 82.5084L426.98 80.0583ZM447.868 40.301L450.081 41.4637L452.591 36.6865L447.324 37.8609L447.868 40.301ZM417.3 47.1165L415.11 45.9114L412.442 50.7612L417.844 49.5566L417.3 47.1165ZM440.735 4.51942L438.818 2.9146L438.662 3.10117L438.545 3.31436L440.735 4.51942ZM447.868 -4L449.785 -2.39518L453.221 -6.5H447.868V-4ZM9.73637 -2.86408V-5.36408H7.79629L7.31464 -3.48473L9.73637 -2.86408ZM5.66073 13.0388L3.239 12.4182L2.32335 15.991L5.98121 15.5182L5.66073 13.0388ZM40.8131 8.49515L43.0255 9.65937L45.2677 5.39857L40.4927 6.01577L40.8131 8.49515ZM18.3971 51.0922L16.1847 49.928L13.8393 54.385L18.8075 53.5583L18.3971 51.0922ZM52.5306 45.4126L54.801 46.4592L56.7774 42.1716L52.1202 42.9465L52.5306 45.4126ZM33.6808 86.3058L31.4104 85.2593L29.4779 89.4516L34.0449 88.7792L33.6808 86.3058ZM60.6819 82.3301L63.0373 83.1678L64.4303 79.2512L60.3177 79.8568L60.6819 82.3301ZM52.5306 105.25L52.2422 107.733L52.2422 107.733L52.5306 105.25ZM118.25 75.5146L120.512 76.5797L122.633 72.0753L117.754 73.0644L118.25 75.5146ZM90.2303 81.1942L88.0171 80.0314L85.5698 84.6897L90.7269 83.6443L90.2303 81.1942ZM111.118 41.4369L113.331 42.5996L115.841 37.8224L110.574 38.9968L111.118 41.4369ZM80.5506 48.2524L78.3602 47.0474L75.6921 51.8971L81.0947 50.6925L80.5506 48.2524ZM103.986 5.65534L102.069 4.05052L101.912 4.23709L101.795 4.45028L103.986 5.65534ZM111.118 -2.86408L113.035 -1.25926L116.471 -5.36408H111.118V-2.86408ZM-3.28839 101.284L118.981 115.483L119.558 110.517L-2.71161 96.3177L-3.28839 101.284ZM121.228 111.446L109.51 96.6791L105.593 99.787L117.311 114.554L121.228 111.446ZM107.28 100.718L242.285 115.485L242.829 110.515L107.824 95.7478L107.28 100.718ZM244.554 111.496L233.855 97.2965L229.862 100.305L240.561 114.504L244.554 111.496ZM231.55 101.282L345.668 115.481L346.285 110.519L232.167 96.3201L231.55 101.282ZM347.973 111.496L337.275 97.2965L333.281 100.305L343.98 114.504L347.973 111.496ZM413.687 107.735V-3.43204H408.687V107.735H413.687ZM-5.5 -3.43204V98.801H-0.5V-3.43204H-5.5ZM130.603 -3.48473L126.527 12.4182L131.371 13.6595L135.446 -2.24343L130.603 -3.48473ZM129.269 15.5182L164.422 10.9745L163.781 6.01577L128.628 10.5595L129.269 15.5182ZM161.889 7.33092L139.473 49.928L143.898 52.2565L166.314 9.65937L161.889 7.33092ZM142.096 53.5583L176.229 47.8787L175.408 42.9465L141.275 48.6261L142.096 53.5583ZM173.548 44.3661L154.698 85.2593L159.239 87.3524L178.089 46.4592L173.548 44.3661ZM157.333 88.7792L184.334 84.8034L183.606 79.8568L156.605 83.8325L157.333 88.7792ZM181.609 81.5068L173.458 104.877L178.179 106.523L186.331 83.1534L181.609 81.5068ZM175.547 108.185L242.285 115.485L242.829 110.515L176.091 103.215L175.547 108.185ZM234.167 99.7606L243.847 76.4742L239.23 74.555L229.55 97.8414L234.167 99.7606ZM241.042 73.0644L213.022 78.744L214.015 83.6443L242.035 77.9647L241.042 73.0644ZM215.732 82.3569L236.619 42.5996L232.193 40.2741L211.305 80.0314L215.732 82.3569ZM233.862 38.9968L203.295 45.8123L204.383 50.6925L234.95 43.877L233.862 38.9968ZM206.029 49.4575L229.464 6.86039L225.083 4.45028L201.648 47.0474L206.029 49.4575ZM229.191 7.26016L236.323 -1.25926L232.489 -4.4689L225.357 4.05052L229.191 7.26016ZM234.406 -5.36408H133.024V-0.364078H234.406V-5.36408ZM232.179 14.3823L267.332 9.8386L266.691 4.87985L231.538 9.42354L232.179 14.3823ZM264.799 6.195L242.383 48.7921L246.807 51.1205L269.224 8.52345L264.799 6.195ZM245.005 52.4224L279.139 46.7428L278.318 41.8106L244.185 47.4902L245.005 52.4224ZM276.458 43.2301L257.608 84.1234L262.149 86.2165L280.999 45.3232L276.458 43.2301ZM260.243 87.6432L287.244 83.6675L286.516 78.7208L259.515 82.6966L260.243 87.6432ZM284.519 80.373L276.367 103.812L281.09 105.454L289.241 82.0154L284.519 80.373ZM278.42 107.114L345.668 115.481L346.285 110.519L279.037 102.152L278.42 107.114ZM337.619 99.6798L346.789 75.2574L342.108 73.4998L332.938 97.9222L337.619 99.6798ZM343.952 71.9285L315.932 77.6081L316.925 82.5084L344.945 76.8288L343.952 71.9285ZM318.641 81.221L339.529 41.4637L335.103 39.1382L314.215 78.8955L318.641 81.221ZM336.772 37.8609L306.205 44.6764L307.293 49.5566L337.86 42.7411L336.772 37.8609ZM308.939 48.3216L332.374 5.72447L327.993 3.31436L304.558 45.9114L308.939 48.3216ZM337.316 -6.5H235.934V-1.5H337.316V-6.5ZM342.731 14.3823L377.883 9.8386L377.242 4.87985L342.09 9.42354L342.731 14.3823ZM375.35 6.195L352.934 48.7921L357.359 51.1205L379.775 8.52345L375.35 6.195ZM355.557 52.4224L389.691 46.7428L388.87 41.8106L354.736 47.4902L355.557 52.4224ZM387.01 43.2301L368.16 84.1234L372.701 86.2165L391.551 45.3232L387.01 43.2301ZM370.795 87.6432L397.796 83.6675L397.067 78.7208L370.066 82.6966L370.795 87.6432ZM387.966 107.531L454.704 115.482L455.296 110.518L388.557 102.566L387.966 107.531ZM457.05 111.57L446.352 96.2346L442.251 99.0955L452.95 114.43L457.05 111.57ZM446.573 98.7087L457.272 75.4223L452.728 73.3349L442.03 96.6213L446.573 98.7087ZM454.503 71.9285L426.483 77.6081L427.477 82.5084L455.497 76.8288L454.503 71.9285ZM429.193 81.221L450.081 41.4637L445.654 39.1382L424.767 78.8955L429.193 81.221ZM447.324 37.8609L416.756 44.6764L417.844 49.5566L448.412 42.7411L447.324 37.8609ZM419.491 48.3216L442.926 5.72447L438.545 3.31436L415.11 45.9114L419.491 48.3216ZM442.652 6.12424L449.785 -2.39518L445.951 -5.60482L438.818 2.9146L442.652 6.12424ZM447.868 -6.5H346.486V-1.5H447.868V-6.5ZM7.31464 -3.48473L3.239 12.4182L8.08247 13.6595L12.1581 -2.24343L7.31464 -3.48473ZM5.98121 15.5182L41.1336 10.9745L40.4927 6.01577L5.34026 10.5595L5.98121 15.5182ZM38.6008 7.33092L16.1847 49.928L20.6095 52.2565L43.0255 9.65937L38.6008 7.33092ZM18.8075 53.5583L52.9409 47.8787L52.1202 42.9465L17.9868 48.6261L18.8075 53.5583ZM50.2602 44.3661L31.4104 85.2593L35.9512 87.3524L54.801 46.4592L50.2602 44.3661ZM34.0449 88.7792L61.0461 84.8034L60.3177 79.8568L33.3166 83.8325L34.0449 88.7792ZM58.3264 81.4924L50.1751 104.412L54.8861 106.087L63.0373 83.1678L58.3264 81.4924ZM52.2422 107.733L118.981 115.483L119.558 110.517L52.819 102.766L52.2422 107.733ZM109.813 99.2981L120.512 76.5797L115.989 74.4495L105.29 97.1679L109.813 99.2981ZM117.754 73.0644L89.7336 78.744L90.7269 83.6443L118.747 77.9647L117.754 73.0644ZM92.4434 82.3569L113.331 42.5996L108.905 40.2741L88.0171 80.0314L92.4434 82.3569ZM110.574 38.9968L80.0066 45.8123L81.0947 50.6925L111.662 43.877L110.574 38.9968ZM82.741 49.4575L106.176 6.86039L101.795 4.45028L78.3602 47.0474L82.741 49.4575ZM105.902 7.26016L113.035 -1.25926L109.201 -4.4689L102.069 4.05052L105.902 7.26016ZM111.118 -5.36408H9.73637V-0.364078H111.118V-5.36408ZM-3.28839 101.284L52.2422 107.733L52.819 102.766L-2.71161 96.3177L-3.28839 101.284ZM107.28 100.718L175.547 108.185L176.091 103.215L107.824 95.7478L107.28 100.718ZM231.55 101.282L278.42 107.114L279.037 102.152L232.167 96.3201L231.55 101.282ZM234.28 12.5236L238.211 -2.81139L233.367 -4.05269L229.437 11.2823L234.28 12.5236ZM235.789 -5.93204H-3V-0.932039H235.789V-5.93204ZM233.513 -4.62063L233.367 -4.05267L238.211 -2.81141L238.356 -3.37937L233.513 -4.62063ZM334.986 101.284L387.974 107.52L388.558 102.554L335.57 96.3181L334.986 101.284ZM390.599 105.934L399.765 82.0912L395.098 80.2971L385.932 104.14L390.599 105.934ZM344.832 12.5236L348.762 -2.81139L343.919 -4.05269L339.989 11.2823L344.832 12.5236ZM346.341 -5.93204H336.84V-0.932039H346.341V-5.93204ZM334.924 -5.03686L328.267 2.9146L332.1 6.12424L338.757 -1.82722L334.924 -5.03686ZM411.187 -5.93204H346.341V-0.932039H411.187V-5.93204ZM336.84 -5.93204H235.789V-0.932039H336.84V-5.93204ZM344.064 -4.62063L343.919 -4.05267L348.762 -2.81141L348.908 -3.37937L344.064 -4.62063ZM385.932 104.141L385.927 104.153L390.595 105.944L390.6 105.933L385.932 104.141ZM338.757 -1.8272L339.233 -2.39516L335.399 -5.60484L334.924 -5.03687L338.757 -1.8272ZM387.974 107.52L410.895 110.218L411.479 105.252L388.558 102.554L387.974 107.52Z" fill="#1E51E6" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_4_177">
            <rect width="401" height="151" fill="white" />
          </clipPath>
        </defs>
      </svg>
      </div>
      <div className="pin-body">
      <div className="pin_detail_image"><img src={require("../static/pin1-min.webp")} alt="" /></div>
      <div className="pin_description">{t.name}</div>
      <div className="back_to_pin"><div className="back-pin"><Link to={"/home"}><img src={require("../static/back-min.webp")} alt="" /></Link></div>Go Back</div>


      </div>
    </motion.div>
  </motion.div>
  )
}

export default Pindetail