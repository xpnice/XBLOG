import React, { Fragment, useEffect, useState } from 'react';
import './index.css';
import Typed from 'typed.js';
import Scroller from './components/Scroller';
import BlogList from './components/BlogList';
import Header from '@/components/Header';

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
  // 座右铭打字逻辑
  useEffect(() => {
    const options = {
      strings: [
        '持续成长，延迟满足'
      ],
      typeSpeed: TYPE_SPEED,
      startDelay: START_DELAY,
    };
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    }
  }, [])
  // 根据滚动高度调整背景透明度
  useEffect(() => {
    function handleScroll(e: any) {
      let scrollTop = document.documentElement.scrollTop
      if (window.innerHeight < scrollTop) return
      setBackgroundOpacity(Math.pow(1 - scrollTop / window.innerHeight, 2))
    }
    // 监听滚动时间调整背景透明度
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <Fragment>
      <Header></Header>
      <div className="title-background-blur" style={{ 'opacity': backgroundOpacity }} />
      <div className="title-background-pure" />
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

