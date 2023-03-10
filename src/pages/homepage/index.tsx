import React, { Fragment, useEffect, useState } from 'react';
import './index.css';
import Typed from 'typed.js';
import Scroller from './components/scroller';
import BlogList from './components/BlogList';

const TYPE_SPEED = 100 // 座右铭打印速度
const START_DELAY = 500 // 座右铭开始延迟
const HomePage: React.FunctionComponent = () => {
  // 创建typed.js所需标签
  const el: any = React.useRef(null);
  const typed: any = React.useRef(null);
  const [backgroundOpacity, setBackgroundOpacity] = useState(1)
  // 点击博客跳转按钮回调
  function onClickArrow() {
    console.log('跳转到博客页面')
  }
  function handleScroll(e: any) {
    let scrollTop = document.documentElement.scrollTop
    console.log('handleScroll', scrollTop)
    setBackgroundOpacity(1 - scrollTop / 900)
  }
  useEffect(() => {
    // 座右铭打字动画初始化
    const options = {
      strings: [
        '持续成长，延迟满足'
      ],
      typeSpeed: TYPE_SPEED,
      startDelay: START_DELAY,
    };
    // 修改引用为span标签
    typed.current = new Typed(el.current, options);

    return () => {
      // 防止内存泄漏
      typed.current.destroy();
    }
  }, [])
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
  return (
    <Fragment>
      <div className="title-background-blur" style={{ 'opacity': backgroundOpacity }} />
      <div className="title-background">
        <h2>XpniceLi 的个人博客</h2>
        <div className="type-wrap">
          <span style={{ whiteSpace: 'pre' }} ref={el} />
        </div>
        <Scroller clickArrow={onClickArrow} />
      </div>
      <div className='content-background'>
        <BlogList />
      </div>

    </Fragment>
  );
}
export default HomePage

