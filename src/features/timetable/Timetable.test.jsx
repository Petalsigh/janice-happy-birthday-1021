import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import Timetable from './Timetable';

describe('Timetable', () => {
  beforeEach(() => localStorage.clear());

  it('adds, edits and deletes a course', async () => {
    const user = userEvent.setup();
    render(<Timetable />);

    await user.click(screen.getByText('+ 添加课程'));
    await user.type(screen.getByLabelText('课程名称'), '高等数学');
    await user.click(screen.getByText('保存'));
    expect(screen.getByTestId('course')).toHaveTextContent('高等数学');
    expect(JSON.parse(localStorage.getItem('timetable-courses'))).toHaveLength(1);

    await user.click(screen.getByTestId('course'));
    await user.clear(screen.getByLabelText('课程名称'));
    await user.type(screen.getByLabelText('课程名称'), '线性代数');
    await user.click(screen.getByText('保存'));
    expect(screen.getByTestId('course')).toHaveTextContent('线性代数');

    await user.click(screen.getByTestId('course'));
    await user.click(screen.getByText('删除'));
    expect(screen.queryByTestId('course')).toBeNull();
  });

  it('prefills the slot when clicking an empty cell', async () => {
    const user = userEvent.setup();
    render(<Timetable />);
    await user.click(screen.getByLabelText('周三第4节 添加'));
    expect(screen.getByLabelText('星期')).toHaveValue('2');
    expect(screen.getByLabelText('开始节次')).toHaveValue('4');
  });
});
