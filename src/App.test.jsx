import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Birthday homepage and interactive pages', () => {
  test('shows the birthday special edition and opens its Ruby soundtrack', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: 'To Janice' })).toBeInTheDocument();
    expect(screen.getByText('1021')).toBeInTheDocument();
    expect(document.querySelector('.wind-chime-art')).toHaveAttribute('src', '/wind-chime-complete.png');
    expect(document.querySelectorAll('.home-lace-frame .lace-edge')).toHaveLength(4);
    expect(document.querySelectorAll('.home-lace-frame .pearl-strand')).toHaveLength(2);
    expect(document.querySelectorAll('.home-lace-frame .coquette-bow')).toHaveLength(3);
    expect(document.querySelectorAll('.home-menu-item .menu-bow')).toHaveLength(4);
    expect(document.querySelectorAll('.home-menu-item .menu-arrow')).toHaveLength(0);
    expect(document.querySelector('.cover-ribbon-age')).not.toBeInTheDocument();
    expect(screen.getByTestId('mascot-like-button')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /回忆/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /十八/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /信笺/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /祝福/ })).toBeInTheDocument();
    expect(new Set(Array.from(document.querySelectorAll('.menu-sticker'), (image) => image.getAttribute('src'))).size).toBe(4);
    expect(Array.from(document.querySelectorAll('.menu-sticker')).at(-1).getAttribute('src')).toBe('/pochacco-wishes-pillow-cutout.png');

    fireEvent.click(screen.getByRole('button', { name: /When I take it all, I know I love me more\. RUBY/ }));
    expect(screen.getByRole('heading', { name: 'Happy Birthday' })).toBeInTheDocument();

    const vinylLink = screen.getByRole('link', { name: '在网易云音乐搜索并播放 JENNIE 的 Ruby' });
    expect(screen.getByRole('img', { name: 'JENNIE《Ruby》专辑封面' })).toHaveAttribute('src', '/ruby-jennie-cover.png');
    expect(screen.getByRole('img', { name: 'Ruby' })).toHaveAttribute('src', '/ruby-wordmark.png');
    expect(screen.queryByRole('img', { name: 'Jennie' })).not.toBeInTheDocument();
    expect(document.querySelectorAll('.ruby-flower')).toHaveLength(10);
    expect(screen.getByRole('heading', { name: 'Happy Birthday' })).toBeInTheDocument();
    expect(vinylLink).toHaveAttribute('href', 'https://music.163.com/#/search/m/?s=JENNIE%20Ruby&type=1');
    expect(vinylLink).toHaveAttribute('target', '_blank');
    fireEvent.click(vinylLink);

    expect(vinylLink).toHaveClass('is-playing');
  });

  test('shows the eighteen reasons one at a time with clear navigation', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: /十八/ }));

    expect(screen.getByRole('heading', { name: '十八' })).toBeInTheDocument();
    expect(screen.getByText('遇i就e，遇e就i的宝宝')).toBeInTheDocument();
    expect(screen.getByLabelText('第 1 条，共 18 条')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '上一条理由' })).toBeDisabled();

    fireEvent.click(screen.getByRole('button', { name: '下一条理由' }));
    expect(screen.getByText('很喜欢笑，不知道是不是笑点低的宝宝')).toBeInTheDocument();
    expect(screen.getByLabelText('第 2 条，共 18 条')).toBeInTheDocument();

    for (let index = 2; index < 18; index += 1) {
      fireEvent.click(screen.getByRole('button', { name: '下一条理由' }));
    }

    expect(screen.getByText('全世界最好的宝宝呀')).toBeInTheDocument();
    expect(screen.getByLabelText('第 18 条，共 18 条')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '下一条理由' })).toBeDisabled();
  });

  test('likes and unlikes the home mascot with a heart burst', () => {
    render(<App />);

    const likeButton = screen.getByRole('button', { name: '点赞帕恰狗' });
    fireEvent.click(likeButton);

    expect(screen.getByRole('button', { name: '取消喜欢' })).toHaveAttribute('aria-pressed', 'true');
    expect(document.querySelectorAll('.burst-heart')).toHaveLength(7);

    fireEvent.click(screen.getByRole('button', { name: '取消喜欢' }));
    expect(screen.getByRole('button', { name: '点赞帕恰狗' })).toHaveAttribute('aria-pressed', 'false');
  });

  test('opens the memory archive, letter envelope, and birthday wishes', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: /回忆/ }));
    expect(screen.getByRole('heading', { name: '回忆' })).toBeInTheDocument();
    expect(document.querySelectorAll('.memory-card')).toHaveLength(3);
    fireEvent.click(screen.getByRole('button', { name: '返回首页' }));

    fireEvent.click(screen.getByRole('button', { name: /信笺/ }));
    expect(screen.getByRole('heading', { name: '信笺' })).toBeInTheDocument();
    expect(screen.getByText('Happy Birthday')).toBeInTheDocument();
    expect(screen.queryByText('TO 芯芯宝贝')).not.toBeInTheDocument();
    expect(document.querySelectorAll('.envelope-fold-lines path')).toHaveLength(3);
    expect(document.querySelector('.envelope-wax-seal')).toHaveAttribute('src', '/cat-wax-seal.png?v=5');
    fireEvent.click(screen.getByRole('button', { name: '翻到信封背面' }));
    expect(screen.getByRole('button', { name: '打开信封' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: '打开信封' }));
    expect(screen.getByText(/已经认识芯芯宝贝九个月24天/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: '返回首页' }));

    fireEvent.click(screen.getByRole('button', { name: /祝福/ }));
    expect(screen.queryByRole('heading', { name: '祝福' })).not.toBeInTheDocument();
    expect(screen.getByRole('region', { name: '生日祝福页面' })).toBeInTheDocument();
    expect(document.querySelector('.wishes-page-shell')).toBeInTheDocument();
    expect(document.querySelectorAll('.cake-candle i')).toHaveLength(5);
    expect(document.querySelectorAll('.cake-tier')).toHaveLength(2);
    expect(document.querySelector('.cake-age-number')).toHaveTextContent('18');
    expect(document.querySelectorAll('.wish-meteor')).toHaveLength(14);
    expect(document.querySelector('.wishes-detail')).not.toHaveClass('is-candlelit');
    fireEvent.click(screen.getByRole('button', { name: '点亮一份祝福' }));
    expect(document.querySelector('.wishes-detail')).toHaveClass('is-candlelit');
    expect(screen.getByText('生日快乐呀！今天你最大。')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /点亮下一份祝福 × 1/ })).toBeInTheDocument();
  });

  test('shows all 99 personal birthday wishes and stops after the last star', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /祝福/ }));

    const wishButton = screen.getByRole('button', { name: '点亮一份祝福' });
    for (let count = 1; count <= 99; count += 1) {
      fireEvent.click(wishButton);
    }

    expect(screen.getByText('生日快乐宝宝 周芯铃要天天开心')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '99 颗星星已全部点亮' })).toBeDisabled();
    fireEvent.click(screen.getByRole('button', { name: '99 颗星星已全部点亮' }));
    expect(screen.getByText('生日快乐宝宝 周芯铃要天天开心')).toBeInTheDocument();
  });
});
