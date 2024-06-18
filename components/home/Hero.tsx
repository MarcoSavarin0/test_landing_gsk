import {useRef} from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import {EffectFade, Autoplay} from "swiper/modules"
import {Button} from "react-scroll"
import parse from "html-react-parser"

import Intro from "@/components/home/Intro"
import localFont from "@next/font/local"

import 'swiper/css'
import 'swiper/css/effect-fade'

const gskPrecisionLight = localFont({ src: '../../styles/fonts/gskprecision-light.woff2' })
const barlowSemicondensedBoldItalic = localFont({ src: '../../styles/fonts/barlowsemicondensed-bolditalic.woff2' })
const barlowSemicondensedItalic = localFont({ src: '../../styles/fonts/barlowsemicondensed-italic.woff2' })

interface Dolor {
	title: string
	type: string
	top: string
	placeholder: string
}

const dolores: Dolor[] = [
	{
		title: `<span className="block">PUEDE SENTIRSE COMO UN</span><span className="block"><span className="font-bold ${barlowSemicondensedBoldItalic.className}">ARDOR DESESPERANTE</span>*</span>`,
		type: "ardor",
		top: "-mt-16",
		placeholder: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASACADASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAEDBAIF/8QAGhAAAgMBAQAAAAAAAAAAAAAAAAMBAiExEf/EABYBAQEBAAAAAAAAAAAAAAAAAAIBA//EABcRAQEBAQAAAAAAAAAAAAAAAAABESH/2gAMAwEAAhEDEQA/APBqs6svCujSyWYSFcZW18kLgh19C7jZ81Cy6eAAhsjukrAED//Z",
	},
	{
		title: `<span className="block">PUEDE SENTIRSE COMO</span> <span className="font-bold ${barlowSemicondensedBoldItalic.className}">CLAVOS ATRAVESANDO</span> <span className="block">LA <span className="font-bold ${barlowSemicondensedBoldItalic.className}">PIEL</span>*</span>`,
		type: "clavos",
		top: "-mt-24",
		placeholder: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAFhAoYDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAAECAwQGCP/EAB8QAQEBAQEBAAMBAQEAAAAAAAABAhExEgMhQWFRcf/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EABkRAQEBAQEBAAAAAAAAAAAAAAABESFBMf/aAAwDAQACEQMRAD8A+BxfAL42wgteGWvBkjz6R59A2k9ZtJ6sZq8tcMstcNI6fxuj8bm/G6fxqjo/H/HThzfj/jpwqOjDow58OjCwb59a5Y4bZVWufVT1E9XP0opN9UgUtestNNe1npBhth+Rvth+QVz/AJP65/yf10fkc2xXN+Ryfkdf5HJ+Qajm259ujbn34NMN+ovq9+ovo0nRT09Fn1V8VPWmfWc9aZ9BefGjPPi54IueKyieKz6lSqLXhlpIylN9UkEX+s9eNL/WekZZaZaa6Zb9UZaZ31ppnfUGab6pN9AAAWBSVTwVc8VPEzxWfErZgBQr4lV8SNRN9TpV9ToVGka9XpGvUGevGevWmvGevWoEm+qS3GgAFFTxWfETxeWhefFzxnlefFFZ9UmeqUAAaHoBfAL4+e86BfAL4J4kT0CeiKaT1m0nqxmry1wyy1x7GkdH43Rhz/jdH42h0/jdH4/45vxun8Yy6MOjDn/G3wqujDXLHDXN8Uaz+LRlUqqYBWgm+VnpemekGW3PtvusNosc+3Pt0bc+1ac35HJ+R1/kcn5EWObbDfjfbDatMNs9etNs9DRX9wpOGFBPWmfUT1efRavPi54jPi54IrKp6ieqQWnXpy/pKMC+JPVTfARfEaXrxGvUSstMdNtMdCMteIvq9eIvoM031Sb6AAAsCp4k8irnipU5MbWCmiumegtIFfGmkpvqkip16z1/V31GvEGekX1evUVoK+JPRNRoAreG0HlWU59VPWoLz6vLOern6UUtCpQMAA9AV8H0XrxPOQvgF8BInoCxlTSes1z+EZrTLXLLPrXCo6Px/wAb4c+HRhqI6fxuj8bmw6MVR04rfDnxW+KDozWuawxW2ao1lWzzVSqq/oi6VvQK1nqq1Weqgz2w/I23WG6NRhuuf8n9b7YfkVXN+Ry/kdX5PXL+QWOb8n9Ybb/k/rHaK59ovjTbNptIAA56vPqM+qnorTKspyqeiKUk81lKYAt/SImp1Tt4kROka/qrUXwEaY6a6ZaGWWvEX1emd9oITfVJvoAACwHkhP0KvPqkLRqAAGqE29p2pFhWpvh+p0NJviNL0z1QRq+oVpN/TUIm+lbw02tNErKTl5WhU9UlU8WC1S9iM+KlaFymk5QV9UEAegADxPOBfAL4CQAMqXP4ieLz5FiVpn1phnn1pj+Ky3w6MOfDfDUHTh0fjc2G+FR04rfFc+K2xQdOK1zWGa1zVG0qpes5VS9VVlbwit4gVqNU7WeqgjdYbrXVY7qtMtuf8jfdc+1Vz/kc35HT+RzfkGo5vyf1jtvv2sNgx0zabZ30aTYSvU+K1DyqelPDnoLz6pCpeoi5emhUvWRU0VvQBE6TadqbeiJ14jSrUW+iI1fWel6Z6/oyz0zv9aaZ3+ghKkgAAAACa0qX9HKiXikaiuwXSQKCtFvE+K0LeJFvStFK1npWmeqom+p1Tt4lYsK3iTtK3jSgJ7TlWKuXsVlEvFNIuXikS9VKC5emg5pdFAuwA9GLeF9Fb14XA/od7CCoAArJzxc8RlefGka59Xlnn+NMjLfDfDnw3xWh04rfFc2K3xVR04rbFc+K2xQdGa1zWGa1zRW0qpWUqug06VvE9/0rQO1nqnajVFRqsdVpqstVVZbrD8jbdYbqqw/I5/yN/wAjn/IjTDbHTbfrHSjHf9Z6a6Za8VqEABQAAVL0JOXrIuXpoVL1BX0LekAK1FqrUWjNK1GjtRb/AFETfWd8Xb+kaGUa9Z3+rtZ3xRNSq+JAEVpJorsHUhGljqZeD6RYv6LtL6L6GlJt6LeptVYLeJBW9Gk2o1VWs7WhNvaVvBbxNvVjQqbei3pW8aAC+jl6sVUvVys/FSqLl4pEvTl4I0lNBy8BQL6APSAB49cAAFQABUp5XlnPV59Vlrn+NMsstM+qy2xW+K58VtirB04rbFc+K2xWkdOK2xXNitsUHRmtc1z5rXNFbSq+mU1/1U0DTsL6R9C6A7UaoukWilqstVVrPVVpGqw3Wuqx3VGO3PtvuufYrHTLTXTLXgrLTKz1rpnfRqIAvoVQXYWqSaK6aPFS9ZFy9CT+gV0i+h9MgtRqnam0SlajVO3iLeDJarPVVfEaBOqjVO1Fqslqpt4dRf2gB0reJBYTLw+o1phP0O9FPsPsQBpVqbeC3ibRYLelbwrpNvFaLVRaeqi1oIrSt6VvFaFvEj0rppTCfo5eirl6cvEKl6qLVL1Epy8NRcvFI70zRQL6oNHpe0fVIPG5H9C0gqVRpzVKyJ6ueoVP41GWmWs/jLPrSeKzWua2xWGb+2uKqOjFbYrnzWuao6cVrmufNa50o6M1pnTnzprNA2mlTTGaV9INfr/Suv8AUfRfQqrpNpXSbVUWs9U7UaoqN1jutNVjuqsZbY7a7rHdFZaZaa6Z6/qjLf8AWWmumehpnfQevU3wVNADIAAKf0fYkMivpNot4m3qId0m3hWp6IdqLenb1NohW9Rq+nanXgiNeI0rSL6InVIX0tURIBW8AwntP6FMW8K0k1Rb0JtLo0rxNotTarUFpW8TaVo0LWdp2otbUW8K3oTb0UW9IreF1ppQQc0ouVUvEKlEWqXrOXiuoi1fTP6P6BfQj6Bo9R2GgPK5LCZVejNCkqzWkNU8SeWozWmf40yyz40zVZrTN/TXNY59aZojfNa5rDNaZqjozprnTnzppnQOjOmk0586aTQN5pU0xmlTQNfovr/UfRfQq7orf+p7U2q0dqNU7UaqidVlqq1WeqNM9VjtrqstLBnr1lfGmvWevFEa9ZXxrr1lryoqNJ14rXideI0kreGm/sUgB3iaun0dT9D6ZQytLpW8TUFvE2i1NvUBaVvCtK1dZFqLenb1NqoVrOqviNCEm/s9VIgt4kW9LwDLqbehkV0rekVo0LeF0reJt6NRVqbS6m1Y1BaX0m0vpW4LU2i1PWlFqbRb1NqrDt4X0QaaP6OXqDNRcvFSs5TRGn0PpHac0iLlPqD+jRXaC+gmj1YT2n9PM5GcvC70KLEvKmXhy9ajKznqFTxphplpnxlK0l/as1pKuVnKvNVGua0zWOa0zQbZrTNYZrTOgbzTTOmEq5oG80r6YzSvoGv1/pfX+s/ofQ00+i+kfRfX+rFXajVK6Ta0QtVnqnqo1RpGqz0vVZ6qjPX9RpevGegTr1nr+rvrPXiKjXiNL0jQ0m+JVpNvIlCtIFayoH0kreIK7St4n6LqIdvU2i3qbeALeJt6LeJt6IdqRbxNvRkW9TfTt4i3kAre1Np28iRkJt6LS8AW8T2i3qbQPpfSbU3Sa1FWptLsTaasV2JtL6TrStwXRfSbSuljcFpJtJtTt6V0VvU28Vo+hP0PqrqqOaR9Kl6iLHUd4famsq7VS9Z/Sk0XLw/pH0PpnRf0EfQNTXrwn6PvXBk1S9SJeNRlRy8pBWVnlMv6OfqtMVplcv6Zy8q5f2qVpKuVnLxUvGmWsq5WUq5QbZq5pjKuUG0q5pjKuaTRtNH9Mpo/r/UVr9f6Pr/Wf0PppV/Q+kXRdFX9Faj6hXS6p2otFqLWlLVZ6qrUWgm+ot/arUXxRFqL4vSNIqNI16vXrOjSb6i3tVb+kW8ZBakWpt6zQW9K3hWptRVXSbpN0m6TUXdJ+kXQ+k0O0rorU/RoorpNvSt4rJpt7Ram1UK3tTadvEjITb0W9TbxAWpt4LU2ootRadqLUU/pNpfRWiwXRXSLU9/1Y3FWlai0rWo3Dui7E2l9NNKt6XStJrVP6H0noVV96ED6Z1F/X+n1mqVNRcvTl4jsL6YtRr9f+D6Z96GdRp9UI7Qaj2QAYTTlUgS8EaS8H0k22aqVcvWeaqXlajFaS/pcv6ZS8q5eKzWkvVSolVL0ZXLxcvGUq5eGjWVcrGXi5QayrmmMqpoG00f0y+j+v9FjT6h9jP6o+hpf1B9I+h9NC/oup+i6NHam0Wpt41ArUap28RbxQrUW/tVvEW8FK39otO1GqKVrO+K1UarNVGqi09VFqAt6m0Wpt4yC3iLS1U2s6Ham3pW8Tb1BV0Xan6LtBRfSR2AfSt4X0VozRam6FvU3SodqbekVpqYdvE2lam1EFqborpF0mh3SLStK1NaK6TdFqotGorVT9Juk/X+rK1FXRXSbU/X+tRuKtT0rpNretRf1/o7/AKjsHV1pY6jo6aL7B3qOhNFy8P6T9F9MWsr+qcvUTRsWosu/6nsLsZ1F9COwGo9scpA1OL9CR2qyuXimcptRKtUvUSnLxqMVpL1crOXhyqy1lUzlVLxWVy9VKzVKDSXi5WUpzSDaaP6YzSpo1cbTX+n9Mpo5TVa/UH1/rP6P6VV9/wBPtZ/UHYDTtK1PS600q6TbwroreKC1Fp29Rb1QWotO3qLVCtTadqLUUrWWqrVZ6rKptTbw7WdrNUW8Rqnaz1UoVvU2i1NrILeFb0reJt6zrWHdF2laXQUXYkrTWVfRW9L6K1oFvS6VqbeDJ29K3hXSbRDukXRWotZ1kWptFqLU0FqbStTdcTVg1Wd0d0ztRqKtRaLpFqytxX11NqforpvWov6pd6jo71qVtXR2JCrquwJBqrOaRNH9RNZqvofSPo/WLUWEl2MaVfYEhnWVBPQmj3P0fepDbKgnoIilSs5eKaSrVL1Epy8bZaSmk/oZXNKlZ9PvFRpNK+mUvVS8NRpKc0zl6qaRWkpzTOVUorSVUrOXh9Bp2j6R0dqjT6HYj6H00NOl2J7B2DR3RWl9JtaDt6m0W9TaoLUWi3ibeGhWptFqNUUtVnaq1nagWqztVqs9VlStRadqLWFK1FvDtRazVgtK3pWpt6inbwrSt4X0ahlaVqboRVpfSbU/QL+i7xPSt4rJ3SbRdItEFqLRai1nWTtRaLUWsg1pnrQ1pFqa0dqNUWo1TVh/SbSK1puC6L6TaPppuGfUW9C6q+0kzX+n9Lqq7TmkfQ+jRf1C+k/R96lqLl6Ej6YFd6E9olGVd4f0XehBX0Egwe46f0n6PvUYV9Qd6kNCzlRKpZWVKmkSm0jSXh9Zy8OXq6y0EvEdVNKLl6c0g5RGhzSDl6DSU5WcvFS9RWkvFd6zlPvVFjqR2ir7R9I7R2qNPqD6iPofTSq+itT9FaB29TaLeptaBbxFot4m0Bai0WotAWs7TtRayFaz1VWs7Uqlai07UarFaK1FotTb1kFvU2i1NvGVNN0VpXQh2/8AU3RWpugVaX0n6LtXUVaXU2l9GsndJuk3SbpNSnai0rpN0mph3TPWhdItZaGqi0Wot6B/SLTt4i1rFh9TaXSt41jQt4XaQabP6IAxdAAQ0HNEBdWPES8V2Ar6H0nsHTEVNGkS8TEUfSl6ETT+gQE49wAGEVNGg5eKyo5UfRy9aRoEdp/Va0qunKj6MZaTSpes5TUaS8PvUSmC5eKRL0wXNKlZy9MGn0cqJo1F9p/SJo+qqvovql0fQp9p/SLS6o0+qm1H0PpRVvU2ldJtUO3iLRai0Bai0WougFqNUa0i1AWotFqLWVgtZap60ztZrR2pt6Vqbes0FqbeC1FvEDtTdFanvUFXSbSuk2mivorU3Sbo1lV0m6RdJujUVdJuk3SbpNFXSbpN0m6QO6RaLpFvVwO3peC3iLWsBam0Wot60o7QCtXGitHaQaFfQ+okC6sIPoaoJ+j+kxdMF2GYoACCpTQcqCh0AZ0/oEDB7n6PsR9Qdjiyvo7EhUP6g+iCxFzR/TOXhyqjTo7xCpVRcvTl4hUq6L9OVEvFerotUqJTBZypl6YKOXiJeKBUvTQfeNauqBfRW9VTt4VvSK0BbwrSt4m0Duk3RWotUVdIu02pujRV0i6TdJukDukXRXSboU7Ua0V0i1nVFqLei3qbUBb1Fp2pt4zQrU28NNvUNJNvTtTbxDRbxNpWoukQ7pN0V0i6A7pN0m6TdCKuk3SbpN0CrpN0RWtYGV0VqbprA7U2lam3qh29IC3jUjUhW8SAqgAAAAAAAAAAAAB9o+iAL9CZeKZXRLxUqQi/VhAEx7gAOGsAALqH2j6IGiumg+qKl4qXqJTXUXLxSJenLxdRpKcvEKl6otUvUSqnqip+loVlQzl4QBQKXg+lXhldFb0Lpot6VvCtK3hqi1FotTaaC1FotRaaC6RdC1F0mguk3RXSLoDuk3SbpN0gdqbelaVvU0FqbeC1KATb07ept4BWptFvEWoC1Not4i1kFqLRai0Bai0WotA7pF0Lept41gZXSbovprBVqfpN0XVDtK6ILi4AXSulxcO3hekFUAAAAAAAAAAAAAAAAAAAcvCALCZVMgACD3AQHm1z1XYPpIND+h2l2F9Giu0fSfo+xdFdVLxmcvF0aSrl6ylXKujSVUrNbUqLnqkqjQs8+pnip61BQAAAAAm07+okBbxFp29qLQFqLRai0UXSLotaZ60mqdqLpOts9aTRd0i6RdIuk0aXSbpndF9Gi7St6j6/0voF28Tb1P0PpQ7eJtBWgVqD14m+Impt7U2/tV8RfGVTb/WdqtVnaBaqLT1WeqsS0XSborelbx0BbwrekVvFxrDHeJt6TTSvoukAAAAAAAAAAAAAAAAAAAAAAAAAAAAHKQBYQEwe4AK3rxuRWgAAC8K3qB9g6kJq4uXipes5eKla0aSqyzXK1KNJV58Zy/teW1aTxc8Z5XnxplefFT1OfFZ9bFAAAAALXib4rXiL4Cb4jStI16lojVZ6qtVnqsidVlqq1WWqza0Wqzuj1WetM6C6RdFdIujRV0m6TaX0ui/ovqp+h9KK7R9VP0fY0H2lf0OxNvVZHqdKTfUE68RqqtZ6rInVZ6qtVnqgnVZ2q1UOkCt4kW9K1qRuQWpAaaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHt+kCeJxMJuiSqdvS7wreJZFfQmkhNXqxLxMqiVWkq8+MpWmb1uUaTxpPWefFz+OsGmfV58RPV58biVefFZ9TnxWWoigDzFC5wKs7EgWvEa8XrxGvARpnr+tNestMjPVZavGmmP5KxaM9VlrStVjuudqp3plrR6rPVY1Suk3adVNvVgv6H0zPtUX9H9I+jbgsIl4r1pKYAbQqi+LviNeCajTPVXr1nrxKI1Wdq9f1nfEgjVTb+jvqdeukahX9IVpLboAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9pdEA8LiAE2sqLep1TTfWaDpykEFKlTL2HPRpc9aYv7ZNM+ukGuWk8Z59Xnx1g1nq8+M8+xpluJVzxefETxefG4hqTPVKBNUm+gWvEaXrxGijPTPTTX9ZaYoy3f0591v8Ak8c+3OjLdY7rXdYbrlVjPVZaq91lqsxU29K3hWpt46SIr6H0j6OXrWKuXp94g5eguXqpeIyptFhMqmmaV8RrxWk6Vlnr+s9NNf1npmqy0jXitJ0sGd9RfVJdI6RN9IBpsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB7MAPDXIJvqkMswJVfEsNAAJQ8+mmeqFi15/iJ4rP8dIrbP8aZ8Z5/jTLrBpn+NMs8/xpl0iVc8XPETxc8biHPVFn01AWvTLQJviNLviNJRnr+sdtt/1jv8ArNGP5GG235GGnKjHdc+63259uNVlplppr+st/wBagi1J6J0hAC6YqpTRPVgqVbPPjRtkLQqeNs0r6jXqr6m+iM9f1nr1prxnr1mjLSNL0jSxYzviL4u+IvjpHWJADTQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD2YAeCuIQAiQXxIDDQADNIJ6oBYsVPF5/gDcVtj+NMgO0Gmf40yA6RKueLngDcRWfTAUBaABN8RoBKM9/1jv8AoDNRh+RhoByqsNufYDjVY6/rLf8AQGojPXpAOixM9UAECwBTy0ngDUZCp4A2zU31N9AVGd8Z69AZoy0jQCxYzviL4A6R1iQA00AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//2Q=="
	},
	{
		title: `<span className="block">PUEDE SENTIRSE COMO</span> <span className="font-bold ${barlowSemicondensedBoldItalic.className}">QUEMARSE</span> CON AGUA <span className="block"><span className="font-bold ${barlowSemicondensedBoldItalic.className}">HIRVIENDO</span>*</span>`,
		type: "quemadura",
		top: "-mt-24",
		placeholder: "",
	},
	{
		title: `<span className="block">PUEDE SENTIRSE COMO</span> <span className="font-bold ${barlowSemicondensedBoldItalic.className}">FUEGO RECORRIENDO</span> <span className="block">LOS <span className="font-bold ${barlowSemicondensedBoldItalic.className}">NERVIOS</span>*</span>`,
		type: "llamas",
		top: "-mt-8",
		placeholder: "",
	},
	{
		title: `<span className="block">PUEDE SENTIRSE COMO</span> <span className="font-bold ${barlowSemicondensedBoldItalic.className}">DESCARGAS ELÉCTRICAS</span> <span className="block">EN EL <span className="font-bold ${barlowSemicondensedBoldItalic.className}">CUERPO</span>*</span>`,
		type: "electricidad",
		top: "-mt-8",
		placeholder: "",
	},
	{
		title: `<span className="block">PUEDE SENTIRSE COMO UNA</span> <span className="font-bold ${barlowSemicondensedBoldItalic.className}">PUNTADA PERFORANTE</span>*`,
		type: "puntada",
		top: "-mt-24",
		placeholder: "",
	},
	{
		title: `<span className="block">PUEDE SENTIRSE COMO</span> TENER LA <span className="font-bold ${barlowSemicondensedBoldItalic.className}">PIEL</span> <span className="block">EN <span className="font-bold ${barlowSemicondensedBoldItalic.className}">LLAMAS</span>*</span>`,
		type: "fuego",
		top: "-mt-10",
		placeholder: "",
	}
]

const Hero = () => {
	const videoRefs: any = useRef([])

	return (
		<section className="bg-gsk-dark">
			<Swiper
				spaceBetween={0}
				slidesPerView={1}
				effect={"fade"}
				className="bg-gsk-dark"
				modules={[EffectFade, Autoplay]}
				allowTouchMove={false}
				loop={true}
				speed={2000}

				onInit={(swiper) => {
					const index = swiper.realIndex
					const currentVideo: HTMLMediaElement = videoRefs.current[index]

					currentVideo.play()

					currentVideo.addEventListener("ended", () => {
						currentVideo.pause()
						currentVideo.currentTime = 0
						if(!swiper.destroyed) {
							swiper.slideNext()
						}
					})

					currentVideo.removeEventListener("ended", () => {
						currentVideo.pause()
						currentVideo.currentTime = 0
						if(!swiper.destroyed) {
							swiper.slideNext()
						}
					})
				}}

				onSlideChangeTransitionStart={(swiperTransition) => {
					const index = swiperTransition.realIndex
					const currentVideo: HTMLMediaElement = videoRefs.current[index]

					currentVideo.play()

					currentVideo.addEventListener("ended", () => {
						currentVideo.pause()
						currentVideo.currentTime = 0
						if(!swiperTransition.destroyed) {
							swiperTransition.slideNext()
						}
					})

					currentVideo.removeEventListener("ended", () => {
						currentVideo.pause()
						currentVideo.currentTime = 0
						if(!swiperTransition.destroyed) {
							swiperTransition.slideNext()
						}
					})
				}}
			>
				{dolores.map(({title, type, top}: Dolor, index: number) => (
					<SwiperSlide key={index}>
						<div className="relative w-full flex flex-col bg-gsk-dark h-[21rem] md:h-[27rem] lg:h-[34rem] xl:h-[43rem] 2xl:h-[44rem] overflow-hidden">
							<div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-b from-gsk-dark via-gsk-dark/60 to-gsk-dark/0 z-10"/>

							<div className="absolute bottom-auto md:bottom-0 md:left-0 w-full h-fit">
								<video ref={(e: any) => videoRefs.current[index] = e} poster={"data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASACADASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAEDBAIF/8QAGhAAAgMBAQAAAAAAAAAAAAAAAAMBAiExEf/EABYBAQEBAAAAAAAAAAAAAAAAAAIBA//EABcRAQEBAQAAAAAAAAAAAAAAAAABESH/2gAMAwEAAhEDEQA/APBqs6svCujSyWYSFcZW18kLgh19C7jZ81Cy6eAAhsjukrAED//Z"} className={`w-full h-[27rem] md:h-auto object-cover md:object-contain object-[30%] md:object-top brightness-75 md:brightness-100 ${top} md:mt-0 bg-gsk-dark`} playsInline={true} crossOrigin="anonymous" preload="none" muted={true} width="1280" height="700" autoPlay={false} controls={false} loop={false}>
									<source src={`https://gsk-hdz-2.b-cdn.net/hero/${type}.webm`} type="video/webm"/>
								</video>
							</div>

							<article className="order-first absolute top-4 md:top-[12%] lg:top-[20%] text-right right-8 md:right-10 lg:right-14 xl:right-18 2xl:right-24 w-10/12 md:w-7/12 lg:w-6/12 xl:w-7/12 pt-6 md:pt-0">
								<p className={`${barlowSemicondensedItalic.className} uppercase inline text-white w-full sm:w-fit text-2xl sm:text-4xl md:text-4xl xl:text-5xl 2xl:text-6xl md:leading-[2rem]`}>
									El dolor ocasionado por
								</p>
								{index === 0 ? (
									<h1 className={`${barlowSemicondensedBoldItalic.className} text-white leading-none uppercase text-4xl sm:text-6xl lg:text-7xl xl:text-8xl`}>
										Herpes Zóster
									</h1>
								) : (
									<>
										<p className={`${barlowSemicondensedBoldItalic.className} text-white leading-none uppercase text-4xl sm:text-6xl lg:text-7xl xl:text-8xl`}>
										Herpes Zóster

										</p>
										{/* Add other elements for index !== 0 */}
									</>
								)}
								{/* <h1 className={`${barlowSemicondensedBoldItalic.className} text-white leading-none uppercase text-4xl sm:text-6xl lg:text-7xl xl:text-8xl`}>Herpes Zóster</h1> */}
								<div className="space-y-2 sm:space-y-4">
									<p className={`${barlowSemicondensedItalic.className} uppercase inline text-white w-full sm:w-fit text-2xl sm:text-4xl md:text-4xl xl:text-5xl 2xl:text-6xl md:leading-[2rem]`}>
										{parse(title)}
									</p>
									<div className={`${gskPrecisionLight} hidden md:block text-gsk-orange text-xl 2xl:text-3xl font-light space-y-3`}>
										<div>
											<p>Conocé más sobre la enfermedad, sus síntomas <span className="lg:block">y las opciones de prevención y tratamiento.</span></p>
											<p><Button activeClass="active" className="hover:text-white transition ease-out duration-300 cursor-pointer" type="submit" value="Hablemos de Zóster" to="que-es-herpes-zoster" spy={true} smooth={true} offset={0} duration={800} />.</p>
										</div>
									</div>
								</div>
							</article>

							<span className="absolute bottom-6 md:bottom-10 xl:bottom-14 right-8 md:right-10 lg:right-14 2xl:right-24 text-white z-20 text-[0.50rem] text-right w-fit leading-tight">*BASADO EN TESTIMONIOS REALES DE PACIENTES. <span className="block lg:inline">LOS SÍNTOMAS DEL HERPES ZOSTER PUEDEN VARIAR.</span></span>

							<div className="absolute bottom-0 left-0 w-full h-2 md:h-1 bg-gradient-to-t from-gsk-dark via-gsk-dark/60 to-gsk-dark/0 z-10"/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className={`${gskPrecisionLight.className} bg-gsk-dark block md:hidden text-gsk-orange text-xl 2xl:text-3xl font-light px-8 md:px-0 my-4`}>
				<p>Conocé más sobre la enfermedad, sus síntomas <span className="lg:block">y las opciones de prevención y tratamiento.</span></p>
				<p><Button activeClass="active" className="hover:text-white transition ease-out duration-300 cursor-pointer" type="submit" value="Hablemos de Zóster" to="que-es-herpes-zoster" spy={true} smooth={true} offset={0} duration={800} />.</p>
			</div>

			<Intro/>
		</section>
	)
}

export default Hero
