import React, { useState } from 'react';

const BodyBtm = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleProject = (index) => {
    setExpandedIndex(prevIndex => prevIndex === index ? null : index);
  };

  const projects = [
    {
      title: 'مشاور اول',
      company: 'اقای حقانی',
      time: '2023 - Present',
      details: '+989367330202'
    },
    {
      title: 'مشاور دوم',
      company: 'اقای محمدیان',
      time: '2023 - Present',
      details: '+989965934362'
    },
    {
      title: 'مشاور سوم',
      company: 'اقای افتخاری پور',
      time: '2023 - Present',
      details: '+989152345578'
    },
    {
      title: 'مشاور چهارم',
      company: 'اقای رضاییان',
      time: '2023 - Present',
      details: '+989126957841'
    },
    {
      title: 'مشاور پنجم',
      company: 'اقای ازموده',
      time: '2023 - Present',
      details: '+989217418956'
    },
  ];

  return (
    <div className="body-btm">
      <div className="body-btm-wrapper">
        <div className="body-btm_left">
          <div className="body-btm_left-recent">
            <div className="recent-worke">Commuunication</div>
            {projects.map((project, index) => (
              <div key={index} className="recent-worke_wrapper">
                <div className="recent-worke-left">
                  <h1 className="title-job">{project.title}</h1>
                  <p className="Product-designer_time">{project.time}</p>
                </div>
                <div className="recent-worke-right">
                  <p>{project.company}</p>
                  <button onClick={() => toggleProject(index)}>
                    {expandedIndex === index ? 'hide' : 'show'}
                  </button>
                </div>
                {expandedIndex === index && (
                  <div className="project-details">
                    <p>{project.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <hr />
          <div className="iphone-main margin-top-2rem">
            <div className="ai-music_text-wrappr">
              <div className="ai-music_text-wrappr_text">
                <h1 className="ai-music_text-wrappr_text_h1">iOS Mobile app</h1>
                <p className="ai-music_text-wrappr_text_p">Product develop</p>
              </div>
              <div className="ai-music_text-wrappr_icon">
                <img src="./src/images/arrowup.png" alt="arrow up" />
              </div>
              <div className="ai-music_image">
                <img src="./src/images/phone.png" alt="phone" />
              </div>
            </div>
          </div>
        </div>
        <div className="body-btm_right">
          <div className="Product-design">
            <h1 className="Product-design_txt">Product-design</h1>
          </div>
          <div className="user-develop">
            <div className="user-exprience">User Experience</div>
            <div className="nocode-develop">NoCode develop</div>
          </div>
          <div className="ai-music">
            <div className="ai-music_text-wrappr">
              <div className="ai-music_text-wrappr_text">
                <h1 className="ai-music_text-wrappr_text_h1">AI Music product</h1>
                <p className="ai-music_text-wrappr_text_p">UX Case study</p>
              </div>
              <div className="ai-music_text-wrappr_icon">
                <img src="./src/images/arrowup.png" alt="arrow up" />
              </div>
            </div>
            <div className="ai-music_image">
              <img src="./src/images/music.png" alt="music" />
            </div>
          </div>
          <div className="ai-music">
            <div className="ai-music_text-wrappr">
              <div className="ai-music_text-wrappr_text">
                <h1 className="ai-music_text-wrappr_text_h1">AI Map redesign</h1>
                <p className="ai-music_text-wrappr_text_p">UX Case study</p>
              </div>
              <div className="ai-music_text-wrappr_icon">
                <img src="./src/images/arrowup.png" alt="arrow up" />
              </div>
            </div>
            <div className="ai-music_image">
              <img src="./src/images/map.png" alt="map" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyBtm;
