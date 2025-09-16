(1)
( i )
$$
f(x) + f(\pi - x) = (x+sin4x) + (\pi - x + sin(4\pi - 4x)) = \pi
$$
したがって、
$$
f(\pi - x) = \pi - f(x)
$$
が成り立つ。よって区間$[0,\pi]$で、上の値は$\frac{\pi}{2}$を軸に左右中心である。

<hr style="height:5px; background-color:white;">

( ii ) <br>
( i )より、ある点が最小になればその対称点が最大になる（逆も同様）。
したがって極値の判定は$[0,\frac{\pi}{2}]$だけを調べれば
十分である。$........\textcircled{1}$

与式を微分し、
$$
f'(x) = 1+ 4cos4x.
$$

$f'(\alpha)=0$を満たす$\alpha$を設定すると、

$$
sin^24\alpha = 1 - cos^24\alpha = 1 - \big(-\frac{1}{4})^2 = \frac{15}{16}

\\

i.e. \space sin4\alpha = \pm \frac{\sqrt{15}}{4} \space .................\textcircled{2}
$$

第二次導関数を調べ、

$$
f''(x) = -16sin4\alpha.
$$
$\textcircled{2}$より、
$$
\begin{cases}
f''(x) < 0 & if \space(sin4\alpha > 0)\\
f''(x) > 0 & if \space(sin4\alpha < 0)
\end{cases}
$$
である。$......\textcircled{3}$

---

$\textcircled{1}$より、
$$
\alpha \in [0,\frac{\pi}{2}].
$$
又、$cos4\alpha=-\frac{1}{4}$より、
$$
4\alpha \in (\frac{\pi}{2}, \frac{3\pi}{2})
$$
$$
i.e. \space\space\alpha \in (\frac{\pi}{8}, \frac{3\pi}{8}).
$$
ここで、端点で$f(0)=0, f(\pi) = \pi$は明らかで、$(0,\pi)$での極値を調べる。
$$
f(\alpha) = \alpha + sin4\alpha = x \pm \frac{\sqrt{15}}{4}
$$
$\textcircled{3}$より、値は極大値または極小値である。

(イ) 極大値について
$$
x + \frac{\sqrt{15}}{4} < \frac{3\pi}{8} + \frac{\sqrt{15}}{4}.
$$
ここで、$\frac{\sqrt{15}}{4} < 1$だから、
$$
\frac{3\pi}{8} + \frac{\sqrt{15}}{4} < \frac{3\pi}{8} + 1.
$$
また、$\pi>3$より、
$$
\frac{5\pi}{8} > 1
\\
1 < \pi -\frac{3\pi}{8}
$$
よって
$$
\frac{3\pi}{8} + 1 < \pi
$$
で、極大値は$\pi$より小さい。

（ロ）極小値について

$$
x - \frac{\sqrt{15}}{4} > \frac{3\pi}{8} - \frac{\sqrt{15}}{4}.
$$

$\frac{\sqrt{15}}{4} < 1$だから、(イ)と同様にして、
$$
\frac{3\pi}{8} - \frac{\sqrt{15}}{4} > \frac{3\pi}{8} - 1 > 0.
$$

で、極大値は$0$より大きい。

（イ）・（ロ）より、題意は満たせた。



<hr style="height:5px; background-color:white;">

(2)<br>


(1)より、
$$
\Big\lfloor \frac{x + sin4x }{ \pi } \Big\rfloor = \Big \lfloor \frac{x}{\pi} \Big\rfloor
$$
であり、これを用いて
$$
\int_0^{n\pi} \lfloor{t}\rfloor + t \space dx = \Bigg( \sum_{k=0}^{n} k \Bigg)+ \Bigg( \int_0^{n\pi} \frac{x + sin4x }{ \pi } dx \Bigg)
\\
= \sum_{k=1}^{n-1} k\pi + \int_0^{n\pi}\frac{x + sin4x }{\pi} dx
\\
=\frac{n(n-1)}{2}\cdot\pi + \frac{1}{\pi}\Bigg[ \frac{x^2}{2} - \frac{cos4x}{4}\Bigg]_0^{n\pi}
$$
$$
=\pi\cdot\frac{n(n-1)}{2} + \frac{1}{\pi}\Bigg( \frac{(n\pi)^2}{2} - \frac{cos(4\pi \cdot n)}{4} + \frac{cos0}{4}\Bigg)_0^{n\pi}
\\
=\frac{\pi n(2n-1)}{2}.
$$



