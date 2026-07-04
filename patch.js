
  window.TRAINING_DATA = {
    eyebrowEn: "Master the Craft",
    eyebrowAr: "احترف المهنة",
    headingEn: "Mentorship & Training",
    headingAr: "برامج التدريب والتوجيه",
    cardTitleEn: "1:1 Micro-Mentorship Session",
    cardTitleAr: "جلسة توجيه مكثفة 1:1",
    para1En: "Stuck on a project? Need a brutally honest portfolio review? Or just want to figure out why your edits don't feel 'right'? This is a highly focused 1-on-1 session where we tackle your exact problems.",
    para1Ar: "مشروع واقف معاك؟ محتاج تقييم صريح لشغلك؟ أو بس عايز تفهم ليه المونتاج بتاعك مش 'مظبوط'؟ دي جلسة مكثفة 1:1 بنركز فيها على مشاكلك بالتحديد.",
    para2En: "No generic advice. We open your timelines, break down the pacing, color, and story structure, and I give you actionable steps to level up your work immediately.",
    para2Ar: "مفيش نصايح عامة. بنفتح التايم لاين بتاعك، بنحلل الإيقاع، الألوان، وبناء القصة، وبديلك خطوات عملية تعلي بيها مستوى شغلك فوراً.",
    videoHeadingEn: "Student Results",
    videoHeadingAr: "نتائج الطلاب",
    videoSubEn: "Hear directly from editors who took the mentorship.",
    videoSubAr: "اسمع مباشرة من مونتيرين حضروا برنامج التوجيه.",
    bullets: [
      { en: "Deep dive into your Premiere Pro / Resolve timelines", ar: "تحليل عميق لمشاريعك على Premiere Pro أو Resolve" },
      { en: "Advanced pacing and storytelling techniques", ar: "تقنيات متقدمة في الإيقاع وسرد القصص" },
      { en: "Color grading feedback and correction", ar: "تقييم وتصحيح الألوان (Color Grading)" },
      { en: "Client negotiation and pricing strategies", ar: "استراتيجيات التسعير والتفاوض مع العملاء" },
    ],
    stats: [
      { target: "200", suffix: "+", labelEn: "Students Mentored", labelAr: "طالب تم توجيهه" },
      { target: "15", suffix: "+", labelEn: "Countries", labelAr: "دولة" },
      { target: "4.9", suffix: "/5", labelEn: "Average Rating", labelAr: "متوسط التقييم" }
    ],
    videos: []
  };

  window.renderFrontendTrainingPage = function() {
    const container = document.getElementById('trainingContainer');
    if (!container) return;
    
    const savedStr = localStorage.getItem('ka_admin_training_data');
    let d = window.TRAINING_DATA;
    if (savedStr) {
       try { d = JSON.parse(savedStr); } catch(e){}
    }
    
    let html = `
      <div class="eyebrow" data-en="${esc(d.eyebrowEn)}" data-ar="${esc(d.eyebrowAr)}">${d.eyebrowEn}</div>
      <h2 class="heading" data-en="${esc(d.headingEn)}" data-ar="${esc(d.headingAr)}">${d.headingEn}</h2>

      <div class="training-card reveal-story">
        <div>
          <h3 data-en="${esc(d.cardTitleEn)}" data-ar="${esc(d.cardTitleAr)}">${d.cardTitleEn}</h3>
          <p data-en="${esc(d.para1En)}" data-ar="${esc(d.para1Ar)}">${d.para1En}</p>
          <p data-en="${esc(d.para2En)}" data-ar="${esc(d.para2Ar)}">${d.para2En}</p>
          
          <ul class="training-list">
            ${(d.bullets || []).map(b => `
              <li><span data-en="${esc(b.en)}" data-ar="${esc(b.ar)}">${b.en}</span></li>
            `).join('')}
          </ul>
        </div>
        
        <div class="training-stats">
          ${(d.stats || []).map(s => `
            <div class="ts">
              ${s.target !== undefined && s.target !== '' ? 
                `<div class="ts-n"><span data-count-target="${esc(s.target)}">0</span><span style="font-size: 24px; margin-left: 4px;">${esc(s.suffix || '')}</span></div>` 
                : `<div class="ts-n">${esc(s.value || '')}</div>`
              }
              <div class="ts-l" data-en="${esc(s.labelEn)}" data-ar="${esc(s.labelAr)}">${s.labelEn}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    
    if (d.videos && d.videos.length > 0) {
      html += `
        <div class="video-reviews reveal-story">
          <div class="video-reviews-header">
            <h3 data-en="${esc(d.videoHeadingEn)}" data-ar="${esc(d.videoHeadingAr)}" style="font-size: 32px; font-weight: 600; color: var(--white); margin-bottom: 12px; letter-spacing: -0.5px;">${d.videoHeadingEn}</h3>
            <p data-en="${esc(d.videoSubEn)}" data-ar="${esc(d.videoSubAr)}" style="color:var(--muted); font-size:16px;">${d.videoSubEn}</p>
          </div>
          <div class="video-reviews-grid">
            ${d.videos.map(v => `
              <div class="video-card" onclick="openVideoModal('${esc(v.url)}')">
                <div class="video-card-bg"></div>
                <div class="video-card-glow"></div>
                <div class="video-card-play">
                  <svg viewBox="0 0 24 24"><polygon points="8 5 19 12 8 19 8 5" fill="currentColor"/></svg>
                </div>
                <div class="video-card-info">
                  <div class="video-card-quote" data-en="${esc(v.textEn)}" data-ar="${esc(v.textAr)}">${v.textEn}</div>
                  <div class="video-card-name">${esc(v.name)}</div>
                  <div class="video-card-role" data-en="${esc(v.roleEn)}" data-ar="${esc(v.roleAr)}">${v.roleEn}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
    
    container.innerHTML = html;
    
    if (window.initScrollReveal) window.initScrollReveal();
  };

  window.renderFrontendTrainingPage();
